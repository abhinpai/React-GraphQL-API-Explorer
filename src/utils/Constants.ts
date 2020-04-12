import { gql } from "@apollo/client";

export default class Constants {}

export class QueryConstants {
  public static readonly AssetTypes = gql`
    {
      assetTypes(language: "en", excludeAssetTypeWithoutRole: false) {
        description
        label
        name
        id
        roles {
          id
          label
          description
          aspects {
            name
            value
          }
        }
        properties {
          id
          label
          description
          dataTypeId
          isMandatory
          isLocalizable
        }
      }
    }
  `;
}


import gql from "graphql-tag";

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

export class GitHubQuery {
  public static readonly UserProfile = gql`
    query gitUser($username: String!) {
      github{
        user(username: $username)
        {
          login
          id
          company
          avatar_url
          repos{
            id
            name
            owner{
              login
              company
              avatar_url
            }
          }
        }
      }
    }
  `;
}
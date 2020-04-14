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
      github {
        user(username: $username) {
          login
          id
          company
          avatar_url
          repos {
            id
            name
            owner {
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

export class TwitterQuery {
  public static readonly UserProfile = gql`
    query twitter($identity: UserIdentity!) {
      twitter {
        user(identifier: name, identity: $identity) {
          created_at
          description
          id
          screen_name
          name
          profile_image_url
          url
          tweets_count
          followers_count
          tweets(limit: 9999) {
            text
            created_at
            retweet_count
          }
        }
      }
    }
  `;

  public static readonly SearchTweets = gql`
    query twitter($query: String!) {
      twitter {
        search(q: $query, count: 9999, result_type: recent) {
          id
          created_at
          text
          retweet_count
          user {
            created_at
            description
            screen_name
            name
            profile_image_url
            tweets_count
            followers_count
          }
        }
      }
    }
  `;
}

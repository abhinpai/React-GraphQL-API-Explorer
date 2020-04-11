import React, { PureComponent, FC } from "react";
import { QueryConstants } from "../../../utils/Constants";
import { ApolloError, useQuery } from "@apollo/client";
import ApolloClient from "apollo-client";

interface IResult {
  loading: boolean;
  error?: ApolloError;
  data: any;
  client: ApolloClient<any>;
}

export default class AssetTypes extends PureComponent {
  render() {
    return (
      <div>
        <h2>Asset Types</h2>
        {/* {this.renderContent()} */}
        <FetchAssetTypes />
      </div>
    );
  }

  //   renderContent() {
  //     /* eslint-disable no-unused-expressions */
  //     return (
  //       <Query query={QueryConstants.AssetTypes}>
  //         {(res: IResult) => {
  //           if (res.loading) return <div>Loading...</div>;
  //           if (res.error) return <div>Error...</div>;
  //           if (res.data) {
  //             console.log(res.data);
  //           }
  //           return <div>data</div>;
  //         }}
  //       </Query>
  //     );
  //   }
}

export const FetchAssetTypes: FC = () => {
  const { loading, error, data, client } = useQuery(QueryConstants.AssetTypes);
  let content;
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error....</p>;
  } else {
    console.log(data);
    content = <div>Hello</div>;
  }
  return content;
};

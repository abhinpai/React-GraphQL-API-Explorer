import React, { PureComponent } from "react";
import { ComponentHeader } from "../../Header/Header";

export default class Overview extends PureComponent {
  render() {
    return (
      <div>
        <ComponentHeader title={"Overview"} />
        <p>
          Purpose of this application
          Technology used to develop this application
          Github Link
          What is GraphQL and how its different then the rest 
          What is the pros and cons of the Graphql 
          How to host react app in firebase
          GraphQL APIs links
        </p>
      </div>
    );
  }
}

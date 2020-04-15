import React, { PureComponent } from "react";
import { ComponentHeader } from "../../Header/Header";

export default class Overview extends PureComponent {
  render() {
    return (
      <div>
        <ComponentHeader title={"Overview"} />
        <ul>
          <li>Purpose of this application</li>
          <li>
            Technology used to develop this application, with Offcial website
            link
          </li>
          <li>Github Link</li>
          <li>What is GraphQL and how its different then the rest</li>
          <li>What is the pros and cons of the Graphql</li>
          <li>CICD with Github Action</li>
          <li>React app hosting in firebase</li>
          <li>Open GraphQl APIs links</li>
        </ul>
      </div>
    );
  }
}

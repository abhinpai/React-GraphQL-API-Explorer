import React, { PureComponent } from "react";
import { ComponentHeader } from "../../Header/Header";

export default class Tweets extends PureComponent {
  render() {
    return (
      <div>
        <ComponentHeader title={"Tweets"} />
      </div>
    );
  }
}

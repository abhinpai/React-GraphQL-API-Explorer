import React, { PureComponent } from "react";
import { ComponentHeader } from "../../Header/Header";

export default class Pokemon extends PureComponent {
  render() {
    return (
      <div>
        <ComponentHeader title={"Pokemon"} />
      </div>
    );
  }
}

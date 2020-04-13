import React, { Component } from "react";
import { Layout } from "antd";
import "./Header.scss";
import { IComponentHeaderProps } from "./IHeaderProps";
const { Header } = Layout;

export default class HeaderComponent extends Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <h2 className="header-title">GraphQL API explorer</h2>
      </Header>
    );
  }
}

export class ComponentHeader extends Component<IComponentHeaderProps> {
  render() {
    return (
      <div>
        <h1 className="component-header">{this.props.title}</h1>
      </div>
    );
  }
}

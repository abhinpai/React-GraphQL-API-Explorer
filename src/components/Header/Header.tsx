import React, { Component } from "react";
import { Layout } from "antd";
import "./Header.scss";
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

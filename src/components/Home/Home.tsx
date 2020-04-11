import React, { PureComponent } from "react";
import "./Home.scss";
import HeaderComponent from "../Header/Header";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import AssetTypes from '../Contents/AssetType/AssetType';

const { Content } = Layout;

export default class Home extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Layout>
          <HeaderComponent />
          <Layout className="body-layout">
            <Sidebar />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
                <AssetTypes/>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

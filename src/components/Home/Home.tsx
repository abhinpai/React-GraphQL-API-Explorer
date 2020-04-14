import React, { PureComponent } from "react";
import "./Home.scss";
import HeaderComponent from "../Header/Header";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import Overview from "../Contents/Overview/Overview";
import GitHubUser from "../Contents/Github/GithubUser";
import { observer, inject } from "mobx-react";
import { IHomeProps } from "./IHomeProps";
import Repo from "../Contents/Github/Repos";
import Pokemon from "../Contents/Pokemon/Pokemon";
import TwitterUser from "../Contents/Twitter/TwitterUser";
import Tweets from "../Contents/Twitter/Tweets";

const { Content } = Layout;

@inject("routerStore", "utilStore")
@observer
export default class Home extends PureComponent<IHomeProps> {
  render() {
    return (
      <div>
        <Layout>
          <HeaderComponent />
          <Layout className="body-layout">
            <Sidebar />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content className="site-layout-background">
                {this.getVisiblity("overview") && <Overview />}
                {this.getVisiblity("githubUser") && <GitHubUser />}
                {this.getVisiblity("githubRepo") && <Repo />}
                {this.getVisiblity("pokemon") && <Pokemon />}
                {this.getVisiblity("twitterUser") && <TwitterUser />}
                {this.getVisiblity("twitterTweets") && <Tweets />}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }

  getVisiblity(component: string) {
    var index =
      this.props.routerStore?.componentVisiblity.findIndex(
        (x) => x.component === component
      ) || 0;
    return this.props.routerStore?.componentVisiblity[index].visible || false;
  }
}

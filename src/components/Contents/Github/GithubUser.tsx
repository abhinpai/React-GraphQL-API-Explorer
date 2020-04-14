import React, { PureComponent, FC } from "react";
import { Input, Empty, Row, Col, Avatar } from "antd";
import { GitHubQuery } from "../../../utils/Constants";
import { useQuery } from "@apollo/client";
import { GithubProfileSkeleton } from "../../Skeleton/Skeleton";
import IContentComponentState from "../../../Models/IContentComponentState";
import "./Github.scss";
import IFCQueryComponentPorps from "../../../Models/IFCQueryComponentProps";

const { Search } = Input;

export default class GitHubUser extends PureComponent<
  {},
  IContentComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isEmpty: true,
      searchValue: "",
      loading: false,
    };
  }

  render() {
    return (
      <>
        <Search
          color="#001529"
          placeholder="Searh Github User"
          enterButton="Search"
          size="large"
          loading={this.state.loading}
          onSearch={(value) => this.searchUser(value)}
        />

        {this.state.isEmpty && (
          <section className="section-empty-state">
            <Empty description={"Enter username to search GitHub Profile"} />
          </section>
        )}

        {!this.state.isEmpty && (
          <RenderGitProfile thisRef={this} value={this.state.searchValue} />
        )}
      </>
    );
  }

  renderProfile(data: any) {
    let emptyRepo = (
      <Empty
        className="empty-content"
        description={data.login + " doesn't have any repository"}
      />
    );
    return (
      <div className="content-div">
        <Row>
          <span className="span-profile">
            <img
              loading="lazy"
              className="profile-avatar"
              src={data.avatar_url}
            />
          </span>
          <section className="basic-profile-section">
            <p className="userName">{data.login}</p>
            <p className="companyName">
              {data.company ? data.company : "Company is not added"}
            </p>
          </section>
        </Row>
        <Row className="profile-contents-row">
          <p>Repositories</p>
          <hr className="divider" />
          {data.repos.length > 0
            ? data.repos.map((repo: any) => {
                return this.renderRepos(repo);
              })
            : emptyRepo}
        </Row>
      </div>
    );
  }

  searchUser(value: string) {
    if (value.length > 0) {
      this.setState({
        isEmpty: false,
        searchValue: value.replace(/\s/g, ""),
        loading: true,
      });
    }
  }

  renderRepos(repo: any) {
    return (
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <section className="repo-section">
          <p className="repo-name">{repo.name}</p>
          <div className="repo-meta-div">
            <Avatar
              className="profile-avatar-owner"
              src={repo.owner.avatar_url}
              size={20}
            />
            <p>{repo.owner.login}</p>
          </div>
          <hr className="divider" />
        </section>
      </Col>
    );
  }
}

export const RenderGitProfile: FC<IFCQueryComponentPorps> = (props) => {
  const { loading, error, data } = useQuery(GitHubQuery.UserProfile, {
    variables: { username: props.value },
  });
  if (loading) {
    return <GithubProfileSkeleton />;
  } else if (error) {
    props.thisRef.setState({ loading: false });
    return <p>Error....</p>;
  }
  props.thisRef.setState({ loading: false });
  return props.thisRef.renderProfile(data.github.user);
};

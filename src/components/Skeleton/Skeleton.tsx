import React, { Component } from "react";
import { Row, Col } from "antd";
import "./Skeleton.scss";

const dummyCount = [1, 2, 3, 4, 5, 6];

interface ISkeletonDiv {
  height: string;
  width: string;
}

export class SkeletonDiv extends Component<ISkeletonDiv> {
  render() {
    return (
      <div
        className="skeleton"
        style={{
          width: this.props.width + "px",
          height: this.props.height + "px",
        }}
      ></div>
    );
  }
}

export class GithubProfileSkeleton extends Component {
  render() {
    return (
      <div className="content-div">
        <Row>
          <span className="span-profile">
            <SkeletonDiv width="100" height="100" />
          </span>
          <section className="basic-profile-section">
            <p className="userName">
              <SkeletonDiv width="200" height="20" />
            </p>
            <p className="companyName">
              <SkeletonDiv width="120" height="20" />
            </p>
          </section>
        </Row>
        <Row className="profile-contents-row">
          <p>
            <SkeletonDiv width="100" height="20" />
          </p>
          <hr className="divider" />
          {dummyCount.map((x) => {
            return (
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <section className="repo-section">
                  <p className="repo-name">
                    <SkeletonDiv width="200" height="20" />
                  </p>
                  <div className="repo-meta-div">
                    <SkeletonDiv width="20" height="20" />
                    <p style={{ marginLeft: "8px" }}>
                      <SkeletonDiv width="80" height="18" />
                    </p>
                  </div>
                  <hr className="divider" />
                </section>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export class TwitterTweetsSkeleTon extends Component {
  render() {
    return (
      <div className="content-div">
        <Row>
          <span className="span-profile">
            <SkeletonDiv width="100" height="100" />
          </span>
          <section className="basic-profile-section">
            <p className="userName">
              <SkeletonDiv width="140" height="20" />
              <span className="screen-name-span">
                <SkeletonDiv width="100" height="16" />
              </span>
            </p>
            <p className="companyName">
              <SkeletonDiv width="500" height="16" />
            </p>
          </section>
          <Col xs={16} sm={10} md={8} lg={5} xl={5} className="tweet-meta-col">
            <p>
              <SkeletonDiv width="180" height="16" />
            </p>
          </Col>
          <Col xs={12} sm={7} md={6} lg={5} xl={5} className="tweet-meta-col">
            <p>
              <SkeletonDiv width="160" height="16" />
            </p>
          </Col>
          <Col xs={12} sm={7} md={6} lg={5} xl={5} className="tweet-meta-col">
            <SkeletonDiv width="160" height="16" />
          </Col>
        </Row>
        <Row className="profile-contents-row">
          <p>
            <SkeletonDiv width="200" height="20" />
          </p>
          <hr className="divider" />
          {dummyCount.map((x) => {
            return (
              <section className="tweet-content-section">
                <p className="tweets">
                  <SkeletonDiv width="500" height="20" />
                </p>
                <div className="tweet-footer-div ">
                  <p className="tweet-datatime">
                    <SkeletonDiv width="200" height="16" />
                  </p>
                  <p className="retweet-count tweet-datatime">
                    <SkeletonDiv width="170" height="16" />
                  </p>
                </div>
                <hr className="divider" />
              </section>
            );
          })}
        </Row>
      </div>
    );
  }
}

export class TwitterProfileSkeleTon extends Component {
  render() {
    return dummyCount.map((x, index) => {
      return (
        <div className="tweets-div" key={index}>
          <section className="tweet-posted-by">
            <div className="tweet-posted-user">
              <div className="tweet-posted-by-avatar">
                <SkeletonDiv width="50" height="50" />
              </div>
              <div>
                <p className="tweet-user-meta no-margin">
                  <span className="usermame">
                    <SkeletonDiv width="140" height="20" />
                  </span>
                  <span className="screen-name">
                    <SkeletonDiv width="140" height="16" />
                  </span>
                </p>
                <p className="no-margin">
                  <SkeletonDiv width="500" height="20" />
                </p>
              </div>
            </div>
          </section>
          <section className="tweet-content-section">
            <p className="tweets">
              <SkeletonDiv width="400" height="18" />
            </p>
            <div className="tweet-footer-div ">
              <p className="tweet-datatime">
                <span>
                  <SkeletonDiv width="180" height="16" />
                </span>
              </p>
              <p className="retweet-count tweet-datatime">
                <span>
                  {" "}
                  <SkeletonDiv width="160" height="16" />
                </span>
              </p>
            </div>
            <hr className="divider" />
          </section>
        </div>
      );
    });
  }
}

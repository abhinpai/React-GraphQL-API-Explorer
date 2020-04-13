import React, { Component } from "react";
import { Row, Col } from "antd";
import "./Skeleton.scss";

const dummyRepos = [1, 2, 3, 4, 5, 6];

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
      <div className="profile-div">
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
        <Row className="profile-repo-row">
          <p>
            <SkeletonDiv width="100" height="20" />
          </p>
          <hr className="divider" />
          {dummyRepos.map((x) => {
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

import React, { PureComponent } from "react";
import { Input, Empty, Row, Col, Avatar } from "antd";
import { formatDistanceToNow } from "date-fns";
import "./Twitter.scss";

const { Search } = Input;

const x = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

interface IGitHubUserState {
  isEmpty: boolean;
  loading: boolean;
  searchValue: string;
}

export default class TwitterUser extends PureComponent<{}, IGitHubUserState> {
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
          placeholder="Enter Twitter Username"
          enterButton="Search"
          size="large"
          loading={this.state.loading}
          onSearch={(value) => this.searchUser(value)}
        />
        {/* {this.state.isEmpty && (
          <section className="section-empty-state">
            <Empty description={"Enter username to search Twitter user profile"} />
          </section>
        )} */}

        {this.renderProfile()}
      </>
    );
  }

  renderProfile() {
    return (
      <div className="content-div">
        <Row>
          <span className="span-profile">
            <img
              loading="lazy"
              className="profile-avatar"
              src={
                "http://pbs.twimg.com/profile_images/1216272117915738114/3h7bHgqE_normal.jpg"
              }
            />
          </span>
          <section className="basic-profile-section">
            <p className="userName">
              Abhin Pai
              <span className="screen-name-span">@PaiAbhin</span>
            </p>
            <p className="companyName">
              Software Engineer @Honeywell |\nOpen source enthusiastic | Having
              a strong belief that Programming doesn't have any Language 👨🏻‍💻
            </p>
          </section>
          <Col xs={12} sm={8} md={6} lg={5} xl={5} className="tweet-meta-col">
            <p>
              Joined{" "}
              <span>
                {formatDistanceToNow(
                  new Date("Sat Sep 07 05:43:16 +0000 2019")
                )}
              </span>{" "}
              ago
            </p>
          </Col>
          <Col xs={12} sm={8} md={6} lg={5} xl={5} className="tweet-meta-col">
            <p>
              <span> 188 </span>
              Follower
            </p>
          </Col>
          <Col xs={12} sm={8} md={6} lg={5} xl={5} className="tweet-meta-col">
            <p>
              <span> 21 </span>
              Total Tweets
            </p>
          </Col>
        </Row>
        <Row className="profile-contents-row">
          <p>Tweets</p>
          <hr className="divider" />
          {x.map((x) => {
            return this.renderTweets();
          })}
        </Row>
      </div>
    );
  }

  renderTweets() {
    return (
      <section className="tweet-content-section">
        <p className="tweets">
          RT @KnowingFlutter: No tienes claro la ruta a seguir para aprender
          Flutter?, entre las diferentes opciones que hay en español, @imthepk
          pre…
        </p>
        <div className="tweet-footer-div ">
          <p className="tweet-datatime">
            Created{" "}
            <span>
              {formatDistanceToNow(new Date("Sat Sep 07 05:43:16 +0000 2019"))}
            </span>{" "}
            ago
          </p>
          <p className="retweet-count tweet-datatime">
            <span>25</span> Retweets
          </p>
        </div>
        <hr className="divider" />
      </section>
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
}

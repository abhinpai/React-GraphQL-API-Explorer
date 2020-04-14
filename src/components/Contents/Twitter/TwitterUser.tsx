import React, { PureComponent, FC } from "react";
import { Input, Empty, Row, Col } from "antd";
import { formatDistanceToNow } from "date-fns";
import { useQuery } from "@apollo/client";
import { TwitterQuery } from "../../../utils/Constants";
import { TwitterProfileSkeleTon } from "../../Skeleton/Skeleton";
import IContentComponentState from "../../../Models/IContentComponentState";
import "./Twitter.scss";
import IFCQueryComponentPorps from "../../../Models/IFCQueryComponentProps";

const { Search } = Input;

export default class TwitterUser extends PureComponent<
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
          placeholder="Enter Twitter Username"
          enterButton="Search"
          size="large"
          loading={this.state.loading}
          onSearch={(value) => this.searchUser(value)}
        />
        {this.state.isEmpty && (
          <section className="section-empty-state">
            <Empty
              description={"Enter username to search Twitter user profile"}
            />
          </section>
        )}

        {!this.state.isEmpty && (
          <TwitterProfile thisRef={this} value={this.state.searchValue} />
        )}
      </>
    );
  }

  renderProfile(data: any) {
    let emptyRepo = (
      <Empty
        className="empty-content"
        description={data.name + " do not have any tweet"}
      />
    );
    return (
      <div className="content-div">
        <Row>
          <span className="span-profile">
            <img
              loading="lazy"
              className="profile-avatar"
              src={data.profile_image_url}
            />
          </span>
          <section className="basic-profile-section">
            <p className="userName">
              {data.name}
              <span className="screen-name-span">{"@" + data.screen_name}</span>
            </p>
            <p className="companyName">{data.description}</p>
          </section>
          <Col xs={16} sm={10} md={8} lg={5} xl={5} className="tweet-meta-col">
            <p>
              Joined{" "}
              <span>{formatDistanceToNow(new Date(data.created_at))}</span> ago
            </p>
          </Col>
          <Col xs={12} sm={7} md={6} lg={5} xl={5} className="tweet-meta-col">
            <p>
              <span> {data.followers_count} </span>
              Follower
            </p>
          </Col>
          <Col xs={12} sm={7} md={6} lg={5} xl={5} className="tweet-meta-col">
            <p>
              <span> {data.tweets_count} </span>
              Total Tweets
            </p>
          </Col>
        </Row>
        <Row className="profile-contents-row">
          <p>Tweets</p>
          <hr className="divider" />
          {data.tweets.length > 0
            ? data.tweets.map((tweet: any) => {
                return this.renderTweets(tweet);
              })
            : emptyRepo}
        </Row>
      </div>
    );
  }

  renderTweets(tweet: any) {
    return (
      <section className="tweet-content-section">
        <p className="tweets">{tweet.text}</p>
        <div className="tweet-footer-div ">
          <p className="tweet-datatime">
            Created{" "}
            <span>{formatDistanceToNow(new Date(tweet.created_at))}</span> ago
          </p>
          <p className="retweet-count tweet-datatime">
            <span> {tweet.retweet_count}</span> Retweets
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

export const TwitterProfile: FC<IFCQueryComponentPorps> = (props) => {
  const { loading, error, data } = useQuery(TwitterQuery.UserProfile, {
    variables: { identity: props.value },
  });
  if (loading) {
    return <TwitterProfileSkeleTon />;
  } else if (error) {
    props.thisRef.setState({ loading: false });
    return <p>Error....</p>;
  }
  props.thisRef.setState({ loading: false });
  return props.thisRef.renderProfile(data.twitter.user);
};

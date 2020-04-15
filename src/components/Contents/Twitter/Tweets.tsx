import React, { PureComponent, FC } from "react";
import { Input, Empty, Avatar } from "antd";
import IContentComponentState from "../../../Models/IContentComponentState";
import IFCQueryComponentPorps from "../../../Models/IFCQueryComponentProps";
import { useQuery } from "@apollo/client";
import { TwitterQuery } from "../../../utils/Constants";
import { formatDistanceToNow } from "date-fns";
import "./Twitter.scss";
import { TwitterProfileSkeleTon } from "../../Skeleton/Skeleton";
import { SimpleImg } from "react-simple-img";

const { Search } = Input;

export default class Tweets extends PureComponent<{}, IContentComponentState> {
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
          placeholder="Search tweets"
          enterButton="Search"
          size="large"
          loading={this.state.loading}
          onSearch={(value) => this.searchUser(value)}
        />
        {this.state.isEmpty && (
          <section className="section-empty-state">
            <Empty description={"You haven't searched any tweets yet"} />
          </section>
        )}

        {!this.state.isEmpty && (
          <FetchTweets thisRef={this} value={this.state.searchValue} />
        )}
      </>
    );
  }

  renderTweets(data: any) {
    return data.map((tweet: any, index: any) => {
      return (
        <div className="tweets-div" key={index}>
          <section className="tweet-posted-by">
            <div className="tweet-posted-user">
              <SimpleImg
                importance={"high"}
                className="tweet-posted-by-avatar"
                width={50}
                height={50}
                src={tweet.user.profile_image_url}
              />
              <div>
                <p className="tweet-user-meta no-margin">
                  <span className="usermame">{tweet.user.name}</span>
                  <span className="screen-name">
                    {"@" + tweet.user.screen_name}
                  </span>
                </p>
                <p className="no-margin">{tweet.user.description}</p>
              </div>
            </div>
          </section>
          <section className="tweet-content-section">
            <p className="tweets">{tweet.text}</p>
            <div className="tweet-footer-div ">
              <p className="tweet-datatime">
                Created{" "}
                <span>{formatDistanceToNow(new Date(tweet.created_at))}</span>{" "}
                ago
              </p>
              <p className="retweet-count tweet-datatime">
                <span> {tweet.retweet_count}</span> Retweets
              </p>
            </div>
            <hr className="divider" />
          </section>
        </div>
      );
    });
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

export const FetchTweets: FC<IFCQueryComponentPorps> = (props) => {
  const { loading, error, data } = useQuery(TwitterQuery.SearchTweets, {
    variables: { query: props.value },
  });
  if (loading) {
    return <TwitterProfileSkeleTon />;
  } else if (error) {
    props.thisRef.setState({ loading: false });
    return <p>Error....</p>;
  }
  props.thisRef.setState({ loading: false });
  return props.thisRef.renderTweets(data.twitter.search);
};

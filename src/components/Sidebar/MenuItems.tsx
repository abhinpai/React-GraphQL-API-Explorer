import {
    GithubOutlined,
    TwitterOutlined,
    ReadOutlined,
    ShareAltOutlined,
    QqOutlined,
  } from "@ant-design/icons";
import { IMenuItems } from './ISidebarProps';
import React from 'react';
  
export const MenuItems: IMenuItems[] = [
    {
      title: "Overview",
      icon: <ReadOutlined />,
      subMenuItems: null,
      renderComponent: "overview",
    },
    {
      title: "Github",
      icon: <GithubOutlined />,
      renderComponent: "githubUser",
      subMenuItems: [
        {
          title: "User",
          icon: null,
          renderComponent: "githubUser",
        },
        {
          title: "Repository",
          icon: null,
          renderComponent: "githubRepo",
        },
      ],
    },
    {
      title: "Twitter",
      icon: <TwitterOutlined />,
      renderComponent: "twitterUser",
      subMenuItems: [
        {
          title: "User",
          icon: null,
          renderComponent: "twitterUser",
        },
        {
          title: "Tweets",
          icon: null,
          renderComponent: "twitterTweets",
        },
      ],
    },
    {
      title: "Pokemon",
      icon: <QqOutlined />,
      subMenuItems: null,
      renderComponent: "pokemon",
    },
    {
      title: "Knowledge Graph",
      icon: <ShareAltOutlined />,
      subMenuItems: null,
      renderComponent: "kg",
    },
  ];
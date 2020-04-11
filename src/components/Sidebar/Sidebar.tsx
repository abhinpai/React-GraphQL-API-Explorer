import React, { PureComponent } from "react";
import { Layout, Menu } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  ReadOutlined,
  ShareAltOutlined,
  QqOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

interface IMenuItems {
  title: string;
  icon: JSX.Element;
  subMenuItems?: ISubMenuItem[] | null;
}

interface ISubMenuItem {
  title: string;
  icon?: JSX.Element | null;
}

const MenuItems: IMenuItems[] = [
  {
    title: "Overview",
    icon: <ReadOutlined />,
    subMenuItems: null,
  },
  {
    title: "Github",
    icon: <GithubOutlined />,
    subMenuItems: [
      {
        title: "User",
        icon: null,
      },
      {
        title: "Repository",
        icon: null,
      },
    ],
  },
  {
    title: "Twitter",
    icon: <TwitterOutlined />,
    subMenuItems: [
      {
        title: "User",
        icon: null,
      },
      {
        title: "Tweets",
        icon: null,
      },
    ],
  },
  {
    title: "Pokemon",
    icon: <QqOutlined />,
    subMenuItems: null,
  },
  {
    title: "Knowledge Graph",
    icon: <ShareAltOutlined />,
    subMenuItems: null,
  },
];

export default class Sidebar extends PureComponent {
  render() {
    return (
      <Sider
        width={200}
        className="site-layout-background"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {this.renderMenu}
        </Menu>
      </Sider>
    );
  }

  get renderMenu() {
    var menuKey: number = 0;
    var subMenukey: number = 0;
    return MenuItems.map((item, index) => {
      menuKey += 1;
      subMenukey += 1;
      if (item.subMenuItems) {
        return (
          <SubMenu
            key={"sub" + menuKey.toString()}
            title={
              <span>
                {item.icon}
                {item.title}
              </span>
            }
          >
            {item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
              return (
                <Menu.Item key={subMenukey.toString() + subMenuItemIndex}>
                  {subMenuItem.title}
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={subMenukey.toString()}>
            <span>
              {item.icon}
              {item.title}
            </span>
          </Menu.Item>
        );
      }
    });
  }
}

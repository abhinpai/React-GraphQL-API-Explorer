import React, { PureComponent } from "react";
import { Layout, Menu } from "antd";
import { inject, observer } from "mobx-react";
import { ISidebarProps } from "./ISidebarProps";
import { MenuItems } from "./MenuItems";
const { SubMenu } = Menu;
const { Sider } = Layout;

@inject("routerStore")
@observer
export default class Sidebar extends PureComponent<ISidebarProps> {
  constructor(props: ISidebarProps) {
    super(props);
    this.updateContentVisibility = this.updateContentVisibility.bind(this);
  }

  render() {
    return (
      <Sider
        width={200}
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
    return MenuItems.map((item) => {
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
            onTitleClick={() =>
              this.updateContentVisibility(item.renderComponent)
            }
          >
            {item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
              return (
                <Menu.Item
                  key={subMenukey.toString() + subMenuItemIndex}
                  onClick={() =>
                    this.updateContentVisibility(subMenuItem.renderComponent)
                  }
                >
                  {subMenuItem.title}
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={subMenukey.toString()}
            onClick={() => this.updateContentVisibility(item.renderComponent)}
          >
            <span>
              {item.icon}
              {item.title}
            </span>
          </Menu.Item>
        );
      }
    });
  }

  updateContentVisibility(component: string) {
    var index =
      this.props.routerStore?.componentVisiblity.findIndex(
        (x) => x.component === component
      ) || 0;
    this.props.routerStore?.setVisiblity(index);
  }
}

import RouterStore from "../../stores/RouterStore";

export interface IMenuItems {
  title: string;
  icon: JSX.Element;
  subMenuItems?: ISubMenuItem[] | null;
  renderComponent: string;
}

interface ISubMenuItem {
  title: string;
  icon?: JSX.Element | null;
  renderComponent: string;
}

export interface ISidebarProps {
  routerStore?: RouterStore;
}

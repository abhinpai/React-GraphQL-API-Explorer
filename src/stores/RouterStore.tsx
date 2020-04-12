import { observable, action } from "mobx";
import { IRouterProps } from "../Models/IRouterProps";

const defaultComponentVisiblity: IRouterProps[] = [
  {
    component: "overview",
    visible: true,
  },
  {
    component: "githubUser",
    visible: false,
  },
  {
    component: "githubRepo",
    visible: false,
  },
  {
    component: "twitterUser",
    visible: false,
  },
  {
    component: "twitterTweets",
    visible: false,
  },
  {
    component: "pokemon",
    visible: false,
  },
  {
    component: "kg",
    visible: false,
  },
];

export default class RouterStore {
  @observable
  componentVisiblity: IRouterProps[] = defaultComponentVisiblity;

  @action setVisiblity(index: number) {
    this.componentVisiblity.map((x) => (x.visible = false));
    this.componentVisiblity[index].visible = true;
  }
}

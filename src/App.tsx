import React, { Component } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import ApiStore from "./stores/ApiStore";
import UtilStore from "./stores/UtilStore";
import RouterStore from './stores/RouterStore';

interface IStores {
  apiStore: ApiStore;
  utilStore: UtilStore;
  routerStore: RouterStore;
}

export default class App extends Component<IStores> {
  render() {
    return <Home/>;
  }
}

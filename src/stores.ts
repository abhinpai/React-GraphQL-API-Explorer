import ApiStore from "./stores/ApiStore";
import UtilStore from './stores/UtilStore';
import RouterStore from './stores/RouterStore';

export default {
  apiStore: new ApiStore(),
  utilStore: new UtilStore(),
  routerStore: new RouterStore()
};

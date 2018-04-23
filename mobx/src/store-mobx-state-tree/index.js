import { Store } from "./store-model";
import { Constants } from "./constants-model";

const store = Store.create({
  depth: 0,
  counts: {},
  isContinous: false
});

const constants = Constants.create({
  subtitle: "mobx-state-tree",
});

export default {
  store,
  constants
};

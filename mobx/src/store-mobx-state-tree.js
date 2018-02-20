import { Store } from "./models";

const store = Store.create({
  depth: 0,
  counts: {}
});

export default {
  store
};

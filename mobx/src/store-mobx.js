import {
  observable,
  useStrict,
  action,
  computed
} from "mobx";

useStrict(true);

class Store {
  @observable depth = 0;
  @observable isContinous = false;
  @observable counts = new Map();

  getCount = id => {
    return computed(() => this.counts.get(id)).get();
  };

  @action
  updateDepth(value) {
    this.depth = value;
  }

  @action
  toggleContinous() {
    this.isContinous = !this.isContinous;
  }

  @action
  updateCount(id) {
    this.counts.set(id, this.counts.get(id) + 1 || 1);
  }

  @action
  updateAllCounts() {
    this.counts.forEach((value, key, map) => {
      map.set(key, value + 1);
    });
  }
}

export default {
  store: new Store()
};

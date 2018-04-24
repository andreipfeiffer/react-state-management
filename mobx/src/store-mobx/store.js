import { observable, useStrict, action, computed } from "mobx";

useStrict(true);

export default class Store {
  @observable depth = 0;
  @observable counts = new Map();
  @observable isContinous = false;

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

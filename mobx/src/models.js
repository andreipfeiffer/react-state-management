import { types } from "mobx-state-tree";

export const Store = types
  .model({
    depth: types.number,
    counts: types.map(types.number)
  })
  .views(self => ({
    getCount(id) {
      return (self.counts && self.counts.get(id)) || 0;
    }
  }))
  .actions(self => ({
    updateDepth(value) {
      self.depth = Number(value);
    },
    updateCount(id) {
      self.counts.set(id, self.counts.get(id) + 1 || 1);
    },
    updateAllCounts() {
      self.counts.forEach((value, key, map) => {
        map.set(key, value + 1);
      });
    }
  }));

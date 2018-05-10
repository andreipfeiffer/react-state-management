import { types } from "mobx-state-tree";

export const Store = types
  .model({
    depth: types.number,
    counts: types.map(types.number),
    isContinous: types.boolean
  })

  .views(self => ({
    getCount(id) {
      return self.counts.get(id) || 0;
    }
  }))

  .actions(self => ({
    updateDepth(value) {
      self.depth = Number(Math.min(+value, 11));
    },
    toggleContinous() {
      self.isContinous = !self.isContinous;
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

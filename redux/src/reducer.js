import * as types from "./action-types";

export default (state, action) => {
  switch (action.type) {
    case types.UPDATE_DEPTH:
      return {
        ...state,
        depth: Math.min(+action.value, 9)
      };

    case types.UPDATE_COUNT:
      const updatedCounts = new Map(state.counts.entries());
      updatedCounts.set(action.id, state.counts.get(action.id) + 1 || 1);

      return {
        ...state,
        counts: updatedCounts
      };

    case types.UPDATE_ALL_COUNTS:
      const incrementedCounts = new Map(state.counts.entries());
      incrementedCounts.forEach((value, key, map) => {
        map.set(key, value + 1);
      });

      return {
        ...state,
        counts: incrementedCounts
      };

    case types.TOGGLE_CONTINOUS:
      return {
        ...state,
        isContinous: !state.isContinous
      }

    default:
      return state;
  }
};

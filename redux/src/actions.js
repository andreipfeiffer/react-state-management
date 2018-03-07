import * as types from "./action-types";

export const updateDepth = value => ({
  type: types.UPDATE_DEPTH,
  value
});

export const updateCount = id => ({
  type: types.UPDATE_COUNT,
  id
});

export const updateAllCounts = () => ({
  type: types.UPDATE_ALL_COUNTS
});

export const toggleContinous = () => ({
  type: types.TOGGLE_CONTINOUS
});

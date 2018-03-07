import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
  depth: 1,
  counts: new Map(),
  isContinous: true
};

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

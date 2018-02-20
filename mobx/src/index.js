import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import "./assets/index.css";
import App from "./App";

import store from "./store-mobx";
// import store from "./store-mobx-state-tree";

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

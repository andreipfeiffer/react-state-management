import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import "./assets/index.css";
import App from "./App";

// import stores from "./store-mobx";
import stores from "./store-mobx-state-tree";

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";

import { Provider } from "react-redux";
import store from "./store";

// each component is connected to store
// import App from "./manyConnections/App";
// only the top-level component is connected to store
import App from "./fewConnections/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

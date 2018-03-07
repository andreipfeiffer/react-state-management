import React from "react";
import ReactDOM from "react-dom";
import { Provider, Subscribe } from "unstated";

import "./assets/index.css";
import App from "./App";
import StoreContainer from "./StoreContainer.js";

ReactDOM.render(
  <Provider>
    <Subscribe to={[StoreContainer]}>
      {store => (
        <App store={store} />
      )}
    </Subscribe>
  </Provider>,
  document.getElementById("root")
);

import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import ItemWrapper from "./ItemWrapper";

import logo from "./assets/logo.svg";
import "./assets/App.css";

@inject("store")
@observer
class App extends Component {
  updateDepth = event => {
    this.props.store.updateDepth(event.target.value);
  };

  updateAllCounts = () => {
    this.props.store.updateAllCounts();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MobX</h1>
        </header>
        <p className="App-intro">
          <input
            type="number"
            value={this.props.store.depth}
            onChange={this.updateDepth}
          />
          <button onClick={this.updateAllCounts}>Increment All</button>
        </p>
        <ItemWrapper currentDepth={0} depth={this.props.store.depth} />
      </div>
    );
  }
}

export default App;

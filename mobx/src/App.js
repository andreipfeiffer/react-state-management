import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import ItemWrapper from "./ItemWrapper";

import logo from "./assets/mobx.svg";
import "./assets/App.css";

@inject("store", "constants")
@observer
class App extends Component {
  updateDepth = event => {
    this.props.store.updateDepth(event.target.value);
  };

  updateAllCounts = () => {
    this.props.store.updateAllCounts();
  };

  toggleContinous = () => {
    this.props.store.toggleContinous();
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MobX</h1>
          <h2 className="App-subtitle">{this.props.constants.subtitle}</h2>
        </header>
        <p className="App-menu">
          <input
            type="number"
            value={this.props.store.depth}
            onChange={this.updateDepth}
          />
          <button onClick={this.updateAllCounts}>+1 all</button>
          <input
            id="toggle"
            type="checkbox"
            value={this.props.store.isContinous}
            onChange={this.toggleContinous}
          />
          <label htmlFor="toggle">continous</label>
          <span className="label">continous update</span>
        </p>
        <div className="App-content">
          <ItemWrapper currentDepth={0} depth={this.props.store.depth} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import ItemWrapper from "./ItemWrapper";

import logo from "./assets/unstated.png";
import "./assets/App.css";

class App extends Component {
  updateDepth = event => {
    this.props.store.updateDepth(event.target.value);
  };

  updateAllCounts = () => {
    this.props.store.updateAllCounts();
  };

  toggleContinous = () => {
    this.props.store.toggleContinous();
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">&nbsp;</h1>
          <h2 className="App-subtitle">&nbsp;</h2>
        </header>
        <p className="App-menu">
          <input
            type="number"
            value={this.props.store.state.depth}
            onChange={this.updateDepth}
          />
          <button onClick={this.updateAllCounts}>+1 all</button>
          <input
            id="toggle"
            type="checkbox"
            checked={this.props.store.state.isContinous}
            onChange={this.toggleContinous}
          />
          <label htmlFor="toggle">continous</label>
          <span className="label">continous update</span>
        </p>
        <div className="App-content">
          <ItemWrapper
            currentDepth={0}
            store={this.props.store}
          />
        </div>
      </div>
    );
  }
}

export default App;

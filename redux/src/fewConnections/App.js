import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateDepth, updateCount, updateAllCounts } from "../actions";

import ItemWrapper from "./ItemWrapper";

import logo from "../assets/logo.svg";
import "../assets/App.css";

class App extends Component {
  updateDepth = event => {
    this.props.updateDepth(event.target.value);
  };

  updateCount = id => {
    this.props.updateCount(id);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux</h1>
        </header>
        <p className="App-intro">
          <input
            type="number"
            value={this.props.depth}
            onChange={this.updateDepth}
          />
          <button onClick={this.props.updateAllCounts}>Increment All</button>
        </p>

        <ItemWrapper
          currentDepth={0}
          depth={this.props.depth}
          updateCount={this.updateCount}
          counts={this.props.counts}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  depth: state.depth,
  counts: state.counts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateDepth,
      updateAllCounts,
      updateCount
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);

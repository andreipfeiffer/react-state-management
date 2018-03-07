import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateDepth, updateAllCounts, toggleContinous } from "../actions";

import ItemWrapper from "./ItemWrapper";

import logo from "../assets/redux.svg";
import "../assets/App.css";

class App extends Component {
  updateDepth = event => {
    this.props.updateDepth(event.target.value);
  };

  updateAllCounts = () => {
    this.props.updateAllCounts();
  };

  toggleContinous = () => {
    this.props.toggleContinous();
  };

  render() {
    console.log(this.props.isContinous)
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux</h1>
          <h2 className="App-subtitle">with maaaaany connections</h2>
        </header>
        <p className="App-menu">
          <input
            type="number"
            value={this.props.depth}
            onChange={this.updateDepth}
          />
          <button onClick={this.updateAllCounts}>+1 all</button>
          <input
            id="toggle"
            type="checkbox"
            checked={this.props.isContinous}
            onChange={this.toggleContinous}
          />
          <label htmlFor="toggle">continous</label>
          <span className="label">continous update</span>
        </p>

        <ItemWrapper currentDepth={0} depth={this.props.depth} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  depth: state.depth,
  isContinous: state.isContinous
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateDepth,
      updateAllCounts,
      toggleContinous
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);

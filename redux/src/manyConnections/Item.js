import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateCount } from "../actions";
import "../assets/Item.css";

function uuid() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

class Item extends Component {
  id = uuid();

  componentWillMount() {
    this.increment();
  }

  componentDidMount() {
    this.reference.addEventListener("mousemove", this.increment);
  }

  componentWillUnmount() {
    this.reference.removeEventListener("mousemove", this.increment);
  }

  increment = () => {
    this.props.updateCount(this.id);
  };

  render() {
    return (
      <div
        ref={elem => (this.reference = elem)}
        className="Item"
        onClick={this.increment}
      >
        {this.props.counts.get(this.id) || 0}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  counts: state.counts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateCount
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Item);

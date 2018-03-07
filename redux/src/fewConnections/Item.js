import React, { Component } from "react";
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
    this.reference.addEventListener("mousemove", this.handleMousemove);
  }

  componentWillUnmount() {
    this.reference.removeEventListener("mousemove", this.handleMousemove);
  }

  handleMousemove = () => {
    this.props.isContinous && this.increment();
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

export default Item;

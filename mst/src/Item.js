import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "./Item.css";

function uuid() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

@inject('store')
@observer
export default class Item extends Component {
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
    this.props.store.updateCount(this.id);
  };

  render() {
    return (
      <div
        ref={elem => (this.reference = elem)}
        className="Item"
        onClick={this.increment}
      >
        {this.props.store.getCount(this.id)}
      </div>
    );
  }
}

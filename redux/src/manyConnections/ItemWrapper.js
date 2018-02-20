import React, { Component } from "react";
import Item from "./Item";
import "../assets/ItemWrapper.css";

export default class ItemWrapper extends Component {
  render() {
    const { currentDepth, depth } = this.props;
    return (
      <div>
        <Item />
        {currentDepth < depth ? (
          <div className="ItemWrapper">
            <ItemWrapper currentDepth={currentDepth + 1} depth={depth} />
            <ItemWrapper currentDepth={currentDepth + 1} depth={depth} />
          </div>
        ) : (
          <div className="ItemWrapper">
            <Item />
            <Item />
          </div>
        )}
      </div>
    );
  }
}

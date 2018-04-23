import React, { Component } from "react";
import Item from "./Item";
import "../assets/ItemWrapper.css";

export default class ItemWrapper extends Component {
  render() {
    const { currentDepth, depth, ...props } = this.props;
    return (
      <div className="ItemWrapper-container">
        <Item {...props} />
        {currentDepth < depth ? (
          <div className="ItemWrapper">
            <ItemWrapper
              currentDepth={currentDepth + 1}
              depth={depth}
              {...props}
            />
            <ItemWrapper
              currentDepth={currentDepth + 1}
              depth={depth}
              {...props}
            />
          </div>
        ) : (
          <div className="ItemWrapper">
            <Item {...props} />
            <Item {...props} />
          </div>
        )}
      </div>
    );
  }
}

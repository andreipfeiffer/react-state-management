import React, { Component } from "react";
import { observer } from "mobx-react";
import Item from "./Item";
import "./ItemWrapper.css";

@observer
export default class ItemWrapper extends Component {
  render() {
    return (
      <div>
        <Item />
        {this.props.currentDepth < this.props.depth ? (
          <div className="ItemWrapper">
            <ItemWrapper
              currentDepth={this.props.currentDepth + 1}
              depth={this.props.depth}
            />
            <ItemWrapper
              currentDepth={this.props.currentDepth + 1}
              depth={this.props.depth}
            />
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

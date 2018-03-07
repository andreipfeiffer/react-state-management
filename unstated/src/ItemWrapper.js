import React, { Component } from "react";
import Item from "./Item";
import "./assets/ItemWrapper.css";

export default class ItemWrapper extends Component {
  render() {
    const { currentDepth, store } = this.props;
    return (
      <div className="ItemWrapper-container">
        <Item store={store} />
        {currentDepth < store.state.depth ? (
          <div className="ItemWrapper">
            <ItemWrapper
              currentDepth={currentDepth + 1}
              store={store}
            />
            <ItemWrapper
              currentDepth={currentDepth + 1}
              store={store}
            />
          </div>
        ) : (
          <div className="ItemWrapper">
            <Item store={store} />
            <Item store={store} />
          </div>
        )}
      </div>
    );
  }
}

import React, { Component } from "react";

export default class GlassItems extends Component {
  render() {
    let {item, handlerGlassVirtual } = this.props;
    return (
      <>
        <img
          className="w-100"
          src={item.url}
          alt={"..."}
          onClick={() => {
            handlerGlassVirtual(item);
          }}
        />
      </>
    );
  }
}

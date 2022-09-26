import React, { Component } from "react";
import CartMoDal from "./CartMoDal";
import ExerciseCart from "./ExerciseCart";

export default class Ex_CartPhone extends Component {
  render() {
    return (
      <ExerciseCart>
        <CartMoDal  />
        {this.props.children}
      </ExerciseCart>
    );
  }
}

import React, { Component } from "react";
import ExerciseCart from "./ExerciseCart";

export default class Ex_CartPhone extends Component {
  render() {
    return (
      //   <ExerciseCart>
      //     <Cart cartData={cartData} />
      //     <ProductList>
      //       <ProductItem item={product} addToCart={this.props.addToCart} />
      //     </ProductList>
      //   </ExerciseCart>
      <ExerciseCart>
        {this.props.cart}
        {this.props.children}
      </ExerciseCart>
    );
  }
}

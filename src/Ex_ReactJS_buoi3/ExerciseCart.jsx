import React, { Component } from "react";
import CartMoDal from "./CartMoDal";
import ProductList from "./ProductList";
import "../assets/Sass/main.scss";

export default class ExerciseCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartStore: [],
    };
  }

  addToCart = (prodClick) => {
    let prodInCart = {
      id: prodClick.id,
      name: prodClick.name,
      currentPrice: prodClick.currentPrice,
      srcImg: prodClick.srcImg,
      desc: prodClick.desc,
      bgText: prodClick.bgText,
      quantity: 1,
    };
    var cartUpdate = [...this.state.cartStore];
    let index = cartUpdate.findIndex((prod) => prod.id === prodInCart.id);
    // console.log(cartUpdate);
    if (index !== -1) {
      cartUpdate[index].quantity += 1;
    } else {
      cartUpdate.push(prodInCart);
    }
    this.setState({
      cartStore: cartUpdate,
      cartUpdate,
    });
  };

  delProdInCart = (prodClick) => {
    // var cartUpdate = [...this.state.cartStore];
    // let index = cartUpdate.findIndex(prod=>prod.id === prodClick);
    // if(index!==-1){
    //   cartUpdate.splice(index,1);
    var cartUpdate = this.state.cartStore.filter(
      (prod) => prod.id !== prodClick
    );
    this.setState({
      cartStore: cartUpdate,
      cartUpdate,
    });
  };

  stepUpAndDown = (prodClick, upOrDown) => {
    var cartUpdate = [...this.state.cartStore];
    let index = cartUpdate.findIndex((prod) => prod.id === prodClick);
    if (upOrDown) {
      cartUpdate[index].quantity += 1;
    } else {
      if (cartUpdate[index].quantity > 1) {
        cartUpdate[index].quantity -= 1;
      }
    }
    this.setState({
      cartStore: cartUpdate,
    });
  };

  render() {
    let tongquantity = this.state.cartStore.reduce((total, prodInCart) => {
      return (total += prodInCart.quantity);
    }, 0);

    return (
      <>
        <CartMoDal
          addToCart={this.state.addToCart}
          cartStore={this.state.cartStore}
          delProdInCart={this.delProdInCart}
          cartUpdate={this.state.cartUpdate}
          stepUpAndDown={this.stepUpAndDown}
        />
        <div className="cart-count mt-3 p-3">
          <button
            type="button"
            className="btn mx-3"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
          >
            <i className="fs-1 p-2 fa-solid fa-cart-arrow-down text-white"></i>
            <span className="cd-cart-count bg-dark text-white fw-bold fs-5">
              {tongquantity}
            </span>
          </button>
        </div>
        <ProductList
          addToCart={this.addToCart}
          cartUpdate={this.state.cartUpdate}
        >
          {this.props.children}
        </ProductList>
      </>
    );
  }
}

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
      maSP: prodClick.maSP,
      tenSP: prodClick.tenSP,
      giaBan: prodClick.giaBan,
      hinhAnh: prodClick.hinhAnh,
      ram: prodClick.ram,
      rom: prodClick.rom,
      soLuong: 1,
    };
    var cartUpdate = [...this.state.cartStore];
    let index = cartUpdate.findIndex((prod) => prod.maSP === prodInCart.maSP);
    // console.log(cartUpdate);
    if (index !== -1) {
      cartUpdate[index].soLuong += 1;
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
    // let index = cartUpdate.findIndex(prod=>prod.maSP === prodClick);
    // if(index!==-1){
    //   cartUpdate.splice(index,1);
    var cartUpdate = this.state.cartStore.filter(
      (prod) => prod.maSP !== prodClick
    );
    this.setState({
      cartStore: cartUpdate,
      cartUpdate,
    });
  };

  stepUpAndDown = (prodClick, upOrDown) => {
    var cartUpdate = [...this.state.cartStore];
    let index = cartUpdate.findIndex((prod) => prod.maSP === prodClick);
    if (upOrDown) {
      cartUpdate[index].soLuong += 1;
    } else {
      if (cartUpdate[index].soLuong > 1) {
        cartUpdate[index].soLuong -= 1;
      }
    }
    this.setState({
      cartStore: cartUpdate,
    });
  };

  render() {
    let tongSoLuong = this.state.cartStore.reduce((total, prodInCart) => {
      return (total += prodInCart.soLuong);
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
            <i className="fs-1 p-2 fa-solid fa-cart-arrow-down text-primary"></i>
            <span className="cd-cart-count bg-success text-white fw-bold fs-5">
              {tongSoLuong}
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

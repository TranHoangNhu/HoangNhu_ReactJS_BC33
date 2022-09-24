import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

export default class ExerciseCart extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      cartStore:[]
    }
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
    }
    var cartUpdate = [...this.state.cartStore];
    let index = cartUpdate.findIndex(prod => prod.maSP === prodInCart.maSP);
    // console.log(cartUpdate);
    if(index!==-1)
    {
      cartUpdate[index].soLuong += 1;
    }
    else{
      cartUpdate.push(prodInCart);
    }
    this.setState({
      cartStore:cartUpdate
    })
  };

  delProdInCart = (prodClick) => {
    this.cartStore = this.cartStore.filter((prodInCart)=> prodInCart.maSP !== prodClick)
    // this.setState({
    //   cartStore:cartStore
    // })
  };

  render() {
    return (
      <>
        <Cart addToCart={this.state.addToCart} cartStore={this.state.cartStore} delProdInCart={(maSP)=> this.delProdInCart(maSP)}/>
        <ProductList addToCart={this.addToCart}>
            {this.props.children}
        </ProductList>
      </>
    );
  }
}
 
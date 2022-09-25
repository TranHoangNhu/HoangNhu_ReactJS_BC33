import React, { Component } from "react";
import CartMoDal from "./CartMoDal";
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
      cartStore:cartUpdate,
      cartUpdate
    })
  };

  delProdInCart = (prodClick) => {
    // var cartUpdate = [...this.state.cartStore];
    // let index = cartUpdate.findIndex(prod=>prod.maSP === prodClick);
    // if(index!==-1){
    //   cartUpdate.splice(index,1);
    var cartUpdate = this.state.cartStore.filter(prod=>prod.maSP !== prodClick);
      this.setState({
        cartStore:cartUpdate,
        cartUpdate
      })
  }

  stepUpAndDown = (prodClick,upOrDown) =>{
    var cartUpdate = [...this.state.cartStore];
    let index = cartUpdate.findIndex(prod=>prod.maSP === prodClick);
    if(upOrDown){
      cartUpdate[index].soLuong +=1;
    }else{
      if(cartUpdate[index].soLuong>1){
        cartUpdate[index].soLuong -= 1;
      }
    }
    this.setState({
      cartStore:cartUpdate,
    })
  }

  render() {
    return (
      <>
        <CartMoDal addToCart={this.state.addToCart} cartStore={this.state.cartStore} delProdInCart={this.delProdInCart} cartUpdate={this.state.cartUpdate} stepUpAndDown={this.stepUpAndDown}/>
        <ProductList addToCart={this.addToCart}>
            {this.props.children}
        </ProductList>
      </>
    );
  }
}
 
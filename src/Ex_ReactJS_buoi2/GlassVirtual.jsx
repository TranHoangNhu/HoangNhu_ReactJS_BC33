import React, { Component } from "react";
import model from "../assets/img/glassesImage/model.jpg";
import "../assets/Sass/main.scss";

const dataGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "/img/glassesImage/g1.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "/img/glassesImage/g2.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "/img/glassesImage/g3.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "/img/glassesImage/g4.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "/img/glassesImage/g5.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "/img/glassesImage/g6.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "/img/glassesImage/g7.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "/img/glassesImage/g8.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "/img/glassesImage/g9.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class GlassVirtual extends Component {
  state = {
    VirtualSrc: "/img/glassesImage/v1.png",
    VirtualInfo: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
  };
  handlerGlassVirtual = (idClick) => {
    this.setState({
      VirtualSrc: `/img/glassesImage/v${idClick.id}.png`,
      VirtualInfo: idClick,
    });
  };

  renderGlass = () => {
    return dataGlasses.map((item, index) => {
      return (
        <div
          className="col-4 col-lg-2 text-white text-center py-3 align-self-center"
          key={index}
        >
          <img
            className="w-100"
            src={item.url}
            alt={"..."}
            onClick={() => {
              this.handlerGlassVirtual(item);
            }}
          />
        </div>
      );
    });
  };

  render() {
    // let { id,price,name,desc } = this.state.VirtualInfo; 

    return (
      <div className="GlassVirtual">
        <h1 className="text-center p-2">GlassVirtual</h1>
        <div className="container d-flex justify-content-between">
          <div className="left-image">
            <img src={model} alt={"model_left"} />
          </div>
          <div className="right-image">
            <img src={model} alt={"model_right"} />
            <div className="info-glass d-flex flex-column justify-content-between">
              <div className="glass-demo">
                <img src={this.state.VirtualSrc} alt={"..."} />
              </div>
              <div className="info text-white px-3">
                <h3 className="py-2 text-center fw-bold">
                {this.state.VirtualInfo.name}
                </h3>
                <a href="#">{this.state.VirtualInfo.price}$</a>
                <span>Stocking</span>
                <p className="pt-2">{this.state.VirtualInfo.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container GlassList mt-3">
          <div className="row row-cols-2 row-cols-lg-3">
            {this.renderGlass()}
          </div>
        </div>
      </div>
    );
  }
}

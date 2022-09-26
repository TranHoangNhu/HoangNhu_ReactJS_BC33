import React, { Component } from "react";
import model from "../assets/img/glassesImage/model.jpg";
import "../assets/Sass/main.scss";
import GlassItems from "./GlassItems";
import data from '../data/glassData.json';


export default class GlassVirtual extends Component {
  state = {
    VirtualSrc: "/img/glassesImage/v1.png",
    VirtualInfo: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      color: "White",
    },
  };
  handlerGlassVirtual = (idClick) => {
    this.setState({
      VirtualSrc: `/img/glassesImage/v${idClick.id}.png`,
      VirtualInfo: idClick,
    });
  };

  renderGlass = () => {
    return data.map((item, index) => {
      return (
        <div
          className="col-4 col-lg-2 text-white text-center py-3 align-self-center"
          key={index}>
          <GlassItems item={item} handlerGlassVirtual={this.handlerGlassVirtual}/>
        </div>
      );
    });
  };

  render() {
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
                  {this.state.VirtualInfo.name} {this.state.VirtualInfo.color}
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

import React, { Component } from "react";
import "../../assets/Sass/main.scss";
import { Link } from "react-router-dom";

export default class DDA extends Component {
  render() {
    return (
      <div className="default_body">
        <div className="container flex-column pt-5">
          <div className="react mt-5">
            <div className="react__spoke react__spoke--0" />
            <div className="react__spoke react__spoke--1" />
            <div className="react__spoke react__spoke--2" />
            <div className="react__spoke--3" />
          </div>
          <div className="container justify-content-between">
            <Link className="button-78" role="button" to="baitap1">
              BÀI TẬP 1 - layout BootStrap
            </Link>
            <Link className="button-78" role="button" to="baitap2">
              BÀI TẬP 2 - GlassVirtual
            </Link>
            <Link className="button-78" role="button" to="zintech">
              BÀI TẬP 3 - CartPhone
            </Link>
            <Link className="button-78" role="button" to="baitap4">
              BÀI TẬP 4 - FormStudent
            </Link>
          </div>
          <div className="container">
            {/* <Link className="button-78" role="button" to="todolist">
              TodoList ReactHook
            </Link> */}
            <Link className="button-78" role="button" to="baitap5">
              Booking Movie
            </Link>
          </div>
        </div>
      </div> 
    );
  }
}

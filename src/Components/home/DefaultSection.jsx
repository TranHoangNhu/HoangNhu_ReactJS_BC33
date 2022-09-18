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
          <div className="container justify-content-between pb-5">
            <Link className="button-78" role="button" to="baitap1">
              BÀI TẬP 1 - layout BootStrap
            </Link>
            <Link className="button-78" role="button" to="baitap2">
              BÀI TẬP 2
            </Link>
            <Link className="button-78" role="button" to="baitap3">
              BÀI TẬP 3
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

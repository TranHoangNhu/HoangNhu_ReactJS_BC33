import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import DDA from "./DefaultSection";
import BaiTapThucHanhLayout from "../../Ex_ReactJS_buoi1/BaiTapThucHanhLayout";

export default class home extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" element={<DDA />} />
          <Route path="baitap1" element={<BaiTapThucHanhLayout />} />
      </Routes>
    );
  }
}

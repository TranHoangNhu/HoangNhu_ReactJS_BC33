import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import DDA from "./DefaultSection";
import BaiTapThucHanhLayout from "../../Ex_ReactJS_buoi1/BaiTapThucHanhLayout";
import GlassVirtual from "../../Ex_ReactJS_buoi2/GlassVirtual";

export default class home extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" element={<DDA />} />
          <Route path="baitap1" element={<BaiTapThucHanhLayout />} />
          <Route path="baitap2" element={<GlassVirtual />} />
      </Routes>
    );
  }
}

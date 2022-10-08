import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import DDA from "./DefaultSection";
import BaiTapThucHanhLayout from "../../Ex_ReactJS_buoi1/BaiTapThucHanhLayout";
import GlassVirtual from "../../Ex_ReactJS_buoi2/GlassVirtual";
import ExerciseCart from "../../Ex_ReactJS_buoi3/ExerciseCart";
import ExFormStudent from "../../Ex_ReactJS_buoi4/ExFormStudent";
import TemplateToDoList from "../../ToDoList_UsingHook/TemplateToDoList";

export default class home extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<DDA />} />
        <Route path="baitap1" element={<BaiTapThucHanhLayout />} />
        <Route path="baitap2" element={<GlassVirtual />} />
        <Route path="baitap3" element={<ExerciseCart />} />
        <Route path="baitap4" element={<ExFormStudent />} />
        <Route path="todolist" element={<TemplateToDoList />} />
      </Routes>
    );
  }
}

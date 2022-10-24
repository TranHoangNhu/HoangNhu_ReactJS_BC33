import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thongTinSV: JSON.parse(localStorage.getItem("studentForm")) || [],
};

const LayThongTinSVReducer = createSlice({
  name: "LayThongTinSVReducer",
  initialState,
  reducers: {
    layThongTinSVAction: (state, action) => {
      let newThongTin = action.payload;
      state.thongTinSV.push(newThongTin);
    },
    traDuLieuSVAction: (state) => {
      return state.thongTinSV;
    },
  },
});

export const { layThongTinSVAction, traDuLieuSVAction } =
  LayThongTinSVReducer.actions;

export default LayThongTinSVReducer.reducer;

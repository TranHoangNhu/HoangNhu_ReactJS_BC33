import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thongTinSV: [],
};

const LayThongTinSVReducer = createSlice({
  name: "LayThongTinSVReducer",
  initialState,
  reducers: {
    layThongTinSVAction: (state, action) => {
      let newThongTin = action.payload;
      state.thongTinSV.push(newThongTin);
    },
  },
});

export const { layThongTinSVAction } = LayThongTinSVReducer.actions;

export default LayThongTinSVReducer.reducer;

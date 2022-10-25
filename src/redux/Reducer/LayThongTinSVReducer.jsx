import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thongTinSV: JSON.parse(localStorage.getItem("studentForm")) || [],
  editSV: {},
};

const sVReducer = createSlice({
  name: "sVReducer",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      let newThongTin = action.payload;
      state.thongTinSV.push(newThongTin);
    },
    delInfo: (state, action) => {
      const idClick = action.payload;
      state.thongTinSV = state.thongTinSV.filter(
        (sv) => sv.idStudent !== idClick
      );
      const newInfo = JSON.stringify(state.thongTinSV);
      localStorage.setItem("studentForm", newInfo);
    },
    editInfo: (state, action) => {
      const idClick = action.payload;
      state.editSV = idClick;
      console.log(state.editSV);
    },
  },
});

export const { addInfo, delInfo, editInfo } = sVReducer.actions;

export default sVReducer.reducer;

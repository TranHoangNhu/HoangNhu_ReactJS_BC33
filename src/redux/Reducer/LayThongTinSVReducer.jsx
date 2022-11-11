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
      console.log(action)
      const idClick = action.payload;
      state.editSV = idClick;
      console.log(state.editSV);
    },
    updateInfo: (state,action) => {
      // const { idStudent, phone, name, email } = state.editSV;
      // let svUpdate = state.thongTinSV.find((sv) => sv.idStudent === idStudent);
      // console.log('log sau khi idClick', svUpdate)
      // svUpdate.idStudent = idStudent;
      // svUpdate.phone = phone;
      // svUpdate.name = name;
      // svUpdate.email = email;
      // const newInfo = JSON.stringify(state.editSV);
      // localStorage.setItem("studentForm", newInfo);
      // console.log("Lưu localStorage thành công");
    },
  },
});

export const { addInfo, delInfo, editInfo, updateInfo } = sVReducer.actions;

export default sVReducer.reducer;

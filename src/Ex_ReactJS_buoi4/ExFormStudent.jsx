import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInfo,
  delInfo,
  editInfo,
  updateInfo,
} from "../redux/Reducer/LayThongTinSVReducer";
import useLocalStorage from "../Hooks/useLocalStorage/useLocalStorage";
import FormStudent from "./FormStudent";
import Table from "./Table";

export default function ExFormStudent() {
  const { thongTinSV } = useSelector((state) => state.sVReducer);
  const [infoLocal, setInfoLocal] = useLocalStorage("studentForm", thongTinSV);

  useEffect(() => {
    console.log("Dữ liệu lấy từ store redux", thongTinSV);
  }, [thongTinSV]);
  /*Phần lấy dữ liệu cho input
    -khi state(value input) thay đổi thì component luôn được re-render lại.
    -useState được tạo nên cũng 1 phần áp dụng Rest trong javaScript thuần. {...arguments}.
    -
  */
  const [newInfo, setNewInfo] = useState({
    idStudent: "",
    phone: "",
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewInfo({
      ...newInfo,
      [id]: value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newInfoSV = [...infoLocal, { ...newInfo }];
    dispatch(addInfo(newInfoSV));
    setInfoLocal(newInfoSV);
  };

  const handleDel = (idClick) => {
    dispatch(delInfo(idClick));
  };

  const handleEdit = (idClick) => {
    dispatch(editInfo(idClick));
  };

  const handleUpdate = () => {
    dispatch(updateInfo());
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            body{\n                background-color: #FAD961;\n                background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);                \n            }\n        ",
        }}
      />
      <h1 className="text-center p-4 text-white fw-bold mt-4">
        QUẢN LÝ SINH VIÊN
      </h1>
      <FormStudent
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleUpdate={handleUpdate}
        newInfo={newInfo}
      />
      <Table handleDel={handleDel} handleEdit={handleEdit} />
    </>
  );
}

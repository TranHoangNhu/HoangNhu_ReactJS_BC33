import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layThongTinSVAction,
  traDuLieuSVAction,
} from "../redux/Reducer/LayThongTinSVReducer";
import useLocalStorage from "../Hooks/useLocalStorage/useLocalStorage";
import FormStudent from "./FormStudent";
import Table from "./Table";

export default function ExFormStudent() {
  const { thongTinSV } = useSelector((state) => state.LayThongTinSVReducer);
  const [infoLocal, setInfoLocal] = useLocalStorage("studentForm", thongTinSV);
  useEffect(() => {
    console.log("Dữ liệu lấy từ store redux", thongTinSV);
  }, [thongTinSV]);
  /*Phần lấy dữ liệu cho input
    -khi state(value input) thay đổi thì component luôn được re-render lại.
    -useState được tạo nên cũng 1 phần áp dụng Rest trong javaScript thuần. {...arguments}.
    -
  */
  const [idStudent, setIdStudent] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const newThongTin = [
    ...infoLocal,
    {
      idStudent,
      name,
      phone,
      email,
    },
  ];
  console.log("state sau khi re-render component", newThongTin);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = layThongTinSVAction(newThongTin);
    dispatch(action);
    console.log('reducer trả dữ liệu: ',traDuLieuSVAction());
    setInfoLocal(newThongTin);
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
        setIdStudent={setIdStudent}
        setName={setName}
        setPhone={setPhone}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <Table />
    </>
  );
}

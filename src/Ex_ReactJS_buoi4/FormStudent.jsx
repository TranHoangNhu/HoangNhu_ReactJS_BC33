import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinSVAction } from "../redux/Reducer/LayThongTinSVReducer";

export default function FormCRUD() {
  const { thongTinSV } = useSelector((state) => state.LayThongTinSVReducer);
  console.log('Dữ liệu lấy từ store redux',thongTinSV);
  /*Phần lấy dữ liệu cho input
    -khi state(value input) thay đổi thì component luôn được re-render lại.
    -useState được tạo nên cũng 1 phần áp dụng Rest trong javaScript thuần. {...arguments}.
    -
  */
  const [idStudent, setIdStudent] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const newThongTin = {
    idStudent,
    name,
    phone,
    email,
  };
  console.log('state sau khi re-render component',newThongTin);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = layThongTinSVAction(newThongTin);
    dispatch(action);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header bg-success text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group mb-2">
                  <p className="mb-0">Mã SV</p>
                  <input
                    className="form-control"
                    id="maSV"
                    name="maSV"
                    onChange={(e) => setIdStudent(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <p className="mb-0">Số điện thoại</p>
                  <input
                    className="form-control"
                    id="soDienThoai"
                    name="soDienThoai"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-2">
                  <p className="mb-0">Họ tên</p>
                  <input
                    className="form-control"
                    id="hoTen"
                    name="hoTen"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <p className="mb-0">Email</p>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Thêm sinh viên</button>
          </div>
        </div>
      </form>
    </div>
  );
}

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function FormCRUD({ handleSubmit, handleChange, handleUpdate }) {
  const { editSV } = useSelector((state) => state.sVReducer);

  // useEffect(() => {
  //   if (editSV !== {}) {
  //     document.getElementById("idStudent").value = editSV.idStudent;
  //     document.getElementById("name").value = editSV.name;
  //     document.getElementById("phone").value = editSV.phone;
  //     document.getElementById("email").value = editSV.email;
  //   }
  // }, [editSV]);

  return (
    <>
      <div className="container">
        <form>
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
                      // value={editSV.idStudent}
                      id="idStudent"
                      name="maSV"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <p className="mb-0">Số điện thoại</p>
                    <input
                      className="form-control"
                      // value={editSV.phone}
                      id="phone"
                      name="soDienThoai"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group mb-2">
                    <p className="mb-0">Họ tên</p>
                    <input
                      className="form-control"
                      // value={editSV.name}
                      id="name"
                      name="hoTen"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <p className="mb-0">Email</p>
                    <input
                      className="form-control"
                      // value={editSV.email}
                      id="email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Thêm sinh viên
              </button>
              <button
                className="btn btn-warning mx-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleUpdate(editSV);
                }}
              >
                Cập nhật
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

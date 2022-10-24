import React from "react";

export default function FormCRUD({
  setIdStudent,
  setName,
  setPhone,
  setEmail,
  handleSubmit,
}) {
  return (
    <>
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
    </>
  );
}

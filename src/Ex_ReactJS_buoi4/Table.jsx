import React from "react";
import { useSelector } from "react-redux";

export default function Table({ handleDel,handleEdit }) {
  const { thongTinSV } = useSelector((state) => state.sVReducer);

  return (
    <>
      <div className="container mt-5">
        <table className="table mt-2">
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã Số</th>
              <th>Họ Tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {thongTinSV.map((sv, index) => {
              return (
                <tr key={index}>
                  <td>{sv.idStudent}</td>
                  <td>{sv.phone}</td>
                  <td>{sv.name}</td>
                  <td>{sv.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDel(sv.idStudent);
                      }}
                    >
                      Xoá
                    </button>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        handleEdit(sv);
                      }}
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

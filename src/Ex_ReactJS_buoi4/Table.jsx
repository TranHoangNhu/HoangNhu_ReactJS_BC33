import React from "react";
import { useSelector } from "react-redux";

export default function Table() {
  const { thongTinSV } = useSelector((state) => state.LayThongTinSVReducer);
  let renderForm = (prevState) => {
    return prevState.map((prod, index) => { 
      return (
        <tr key={index}>
          <td>{prod.idStudent}</td>
          <td>{prod.name}</td>
          <td>{prod.phone}</td>
          <td>{prod.email}</td>
          {/* <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  delProduct(prod.id);
                }}
              >
                Xoá
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => {
                  editProduct(prod);
                }}
              >
                Sửa
              </button>
            </td> */}
        </tr>
      );
    });
  };

  return (
    <>
      <div className="container mt-5">
        <table className="table mt-2">
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã Số</th>
              <th>Họ Tên</th>
              <th>Số điện thoại</th>
              <th>Email </th>
            </tr>
          </thead>
          <tbody>{renderForm(thongTinSV)}</tbody>
        </table>
      </div>
    </>
  );
}

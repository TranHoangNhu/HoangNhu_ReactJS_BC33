import React, { Component } from "react";

export default class TableStudent extends Component {

  render() {
    const { arrProduct, delProduct, editProduct } = this.props;
    return (
      <table className="table mt-2">
        <thead className="bg-dark text-white text-center text-uppercase fs-5">
          <tr>
            <th>Mã Sinh Viên</th>
            <th>Avatar</th>
            <th>Họ Tên</th>
            <th>Số Điện Thoại</th>
            <th>Địa Chỉ</th>
            <th><i class="fa-solid fa-gear"></i></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((prod, index) => {
            return (
              <tr key={index}>
                <td className="text-center text-white fw-bold pt-4">{prod.id}</td>
                <td className="text-center text-white fw-bold pt-4">
                  <img src={prod.image} alt="..." width={50} height={50} />
                </td>
                <td className="text-center text-white fw-bold pt-4">{prod.name}</td>
                <td className="text-center text-white fw-bold pt-4">{prod.price}</td>
                <td className="text-center text-white fw-bold pt-4">{prod.description}</td>
                <td className="text-center text-white fw-bold pt-4">
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

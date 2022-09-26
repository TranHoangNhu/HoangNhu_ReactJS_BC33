import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { prod, xemChiTiet, addToCart } = this.props;
    return (
      <div className="card">
        <img
          src={prod.hinhAnh}
          height={350}
          className="w-100 p-3"
          style={{ objectFit: "contain" }}
          alt={"..."}
        />
        <div className="card-body">
          <p className="fs-4 fw-bold">{prod.tenSP}</p>
          <p>
            Giá bán:{" "}
            <span className="text-danger fs-5 fw-normal px-2">
              {prod.giaBan.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </p>
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalInfo"
            onClick={() => {
              // this.xemChiTiet(prod)
              //callback function
              xemChiTiet(prod);
            }}
          >
            Xem chi tiết
          </button>
          <button
            type="button"
            className="btn mx-3 btn-warning"
            onClick={() => {
              addToCart(prod);
            }}
          >
            Add to cart
            <i className="ms-2 fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    );
  }
}

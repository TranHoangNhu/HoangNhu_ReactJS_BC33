import React, { Component } from "react";
import ProductItem from "./ProductItem";
import data from "../data/phoneData.json";

export default class ProductList extends Component {
  state = {
    spChiTiet: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "/img/phoneProducts/meizuphone.jpg",
      soLuong: 1,
    },
  };

  renderProduct = () => {
    const { addToCart } = this.props;
    return data.map((prod, index) => {
      return (
        <div className="col-12 col-md-4 p-4" key={index}>
          <ProductItem
            addToCart={addToCart}
            prod={prod}
            xemChiTiet={this.xemChiTiet}
          />
        </div>
      );
    });
  };

  xemChiTiet = (prodClick) => {
    console.log(prodClick.soLuong);
    //Thay đổi state = prod click
    this.setState({
      spChiTiet: prodClick,
    });
  };

  render() {
    let {
      tenSP,
      hinhAnh,
      manHinh,
      ram,
      rom,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      soLuong,
    } = this.state.spChiTiet;

    return (
      <>
        <div className="container">
          <h3 className="text-center p-4 bg-light">Danh sách sản phẩm</h3>
          <div className="row">{this.renderProduct()}</div>
          <div
            className="modal fade"
            id="modalInfo"
            tabIndex={-1}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close p-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="modal-body">
                  <div className="my-5 px-3">
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <h3 className="fs-1 fw-bold text-center py-2">
                          {tenSP}
                        </h3>
                        <img
                          src={hinhAnh}
                          alt="..."
                          height={350}
                          className="w-100"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="col-8 mx-auto px-5">
                        <h3 className="fs-1 fw-bold py-2">
                          Thông tin chi tiết
                        </h3>
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Màn hình</th>
                              <td>{manHinh}</td>
                            </tr>
                            <tr>
                              <th>Hệ điều hành</th>
                              <td>{heDieuHanh}</td>
                            </tr>
                            <tr>
                              <th>Cam trước</th>
                              <td>{cameraTruoc}</td>
                            </tr>
                            <tr>
                              <th>Cam sau</th>
                              <td>{cameraSau}</td>
                            </tr>
                            <tr>
                              <th>Ram</th>
                              <td>{ram}</td>
                            </tr>
                            <tr>
                              <th>Rom</th>
                              <td>{rom}</td>
                            </tr>
                            <tr>
                              <th>Trạng thái</th>
                              {soLuong > 0 ? (
                                <td className="fw-bold fs-4 text-success">
                                  Còn Hàng
                                </td>
                              ) : (
                                <td className="fw-bold fs-4 text-danger">
                                  Hết Hàng
                                </td>
                              )}
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

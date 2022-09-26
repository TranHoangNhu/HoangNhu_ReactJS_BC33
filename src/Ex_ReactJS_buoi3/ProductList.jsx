import React, { Component } from "react";
import ProductItem from "./ProductItem";

const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "/img/phoneProducts/vsphone.jpg",
    soLuong: 0,
  },
  {
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
  {
    maSP: 3,
    tenSP: "IPhone 14 Pro",
    manHinh: "OLED, 6.1, 2556 x 1179 pixels",
    heDieuHanh: "iOS 16",
    cameraSau: "Chính 48 MP, Siêu Rộng 12 MP, tele 12 MP",
    cameraTruoc: "12 MP",
    ram: "... GB",
    rom: "128 GB",
    giaBan: 30990000,
    hinhAnh: "/img/phoneProducts/applephone.jpg",
    soLuong: 10,
  },
  {
    maSP: 4,
    tenSP: "Samsung Galaxy S22 Ultra",
    manHinh: "Dynamic AMOLED 2X",
    heDieuHanh: "Android 12, One UI 4.1",
    cameraSau: "108 MP, f/1.8 góc rộng",
    cameraTruoc: "40 MP, f/2.2",
    ram: "12 GB",
    rom: "512 GB",
    giaBan: 29590000,
    hinhAnh: "/img/phoneProducts/galaxys22ultra.jpg",
    soLuong: 4,
  },
  {
    maSP: 5,
    tenSP: "Lenovo Legion Y70",
    manHinh: "OLED 144Hz, HDR10 +, 1000 nits",
    heDieuHanh: "Android 12",
    cameraSau: "góc rộng: 50 MP, góc siêu rộng: 13 MP & góc sâu: 2 MP",
    cameraTruoc: "16 MP",
    ram: "8 GB",
    rom: "128 GB",
    giaBan: 17240000,
    hinhAnh: "/img/phoneProducts/lenovo_legion.jpg",
    soLuong: 6,
  },
  {
    maSP: 6,
    tenSP: "ASUS ROG 6",
    manHinh: "AMOLED 1 tỷ màu, 165Hz, HDR10+",
    heDieuHanh: "Android 12",
    cameraSau: "Chính góc rộng: 50 MP, góc siêu rộng: 13 MP & macro: 5 MP",
    cameraTruoc: "12 MP",
    ram: "16 GB",
    rom: "512 GB",
    giaBan: 24990000,
    hinhAnh: "/img/phoneProducts/asus-rog-phone-6.png",
    soLuong: 4,
  },
];

// let saveLocalStorage = () => {
//   localStorage.setItem("cartPhone", JSON.stringify(cartStore));
// };

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
    return dataPhone.map((prod, index) => {
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

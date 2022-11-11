import React, { Component } from "react";
import ProductItem from "./ProductItem";
// import data from "../data/phoneData.json";
import data from "../data/member-card.json";

export default class ProductList extends Component {
  state = {
    cardInfo: {
      id: 1,
      name: "ECARD-COPPER-MEMBER",
      bgText: "#ac6d00",
      startingPrice: 200000,
      currentPrice: 150000,
      srcImg: "/img/card_member/copper-member.png",
      desc: "Tính năng và quyền lợi: sẽ công bố <br> sau khi dự án kết thúc.",
      quantity: 1000,
    },
  };

  renderProduct = () => {
    const { addToCart } = this.props;
    return data.map((prod, index) => {
      return (
        <div className="col-12 col-md-3 p-4" key={index}>
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
    console.log(prodClick.quantity);
    //Thay đổi state = prod click
    this.setState({
      cardInfo: prodClick,
    });
  };

  render() {
    let { name, bgText, startingPrice, currentPrice, srcImg, desc, quantity } =
      this.state.cardInfo;

    return (
      <>
        <div className="container-fluid bg-dark">
          <h3 className="text-center pt-5 fw-bold fs-2 text-warning">
            WEBSITE DEMO BÁN MEMBER-ECARD
          </h3>
          <div className="container">
            <div className="contenedorCards">{this.renderProduct()}</div>
          </div>
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
                          {name}
                        </h3>
                        <img
                          src={srcImg}
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
                              <th>Tên Sản phẩm</th>
                              <td>{name}</td>
                            </tr>
                            <tr>
                              <th>Loại màu</th>
                              <td>{bgText}</td>
                            </tr>
                            <tr>
                              <th>Giá hiện tại</th>
                              <td>{startingPrice}</td>
                            </tr>
                            <tr>
                              <th>Giá khuyến mãi</th>
                              <td>{currentPrice}</td>
                            </tr>
                            <tr>
                              <th>Khách hàng được gì:</th>
                              <td>{desc}</td>
                            </tr>
                            <tr>
                              <th>Số lượng hàng còn lại</th>
                              <td>{quantity}</td>
                            </tr>
                            <tr>
                              <th>Trạng thái</th>
                              {quantity > 0 ? (
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

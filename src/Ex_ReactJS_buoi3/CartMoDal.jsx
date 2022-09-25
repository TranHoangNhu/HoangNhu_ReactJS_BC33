import React, { Component } from "react";

export default class CartMoDal extends Component {
  render() {
    const { cartStore, delProdInCart, cartUpdate, stepUpAndDown } = this.props;

    return (
      <>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-fullscreen"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-success fw-bold fs-1"
                  id="modalTitleId"
                >
                  CHI TIẾT GIỎ HÀNG
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body bg-dark px-5">
                {cartUpdate === undefined ? (
                  <div className="row mt-5 pt-5">
                    <h1 className="text-center fs-1 mt-5 pt-5 text-warning">
                      Trong giỏ hàng chưa có sản phẩm nào cả !!!
                    </h1>
                  </div>
                ) : (
                  cartStore.map((prod) => {
                    return (
                      <div className="card rounded-3 m-3" key={prod.maSP}>
                        <div className="card-body p-4">
                          <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={prod.hinhAnh}
                                className="img-fluid rounded-3"
                                alt={prod.name}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <p className="lead fw-bold mb-2 fs-4 text-center">
                                {prod.tenSP}
                              </p>
                              <p className="text-center">
                                <span className="text-muted">Ram: </span>
                                <u>{prod.ram}</u>{" "}
                                <span className="text-muted">Rom: </span>
                                <u>{prod.rom}</u>
                              </p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex justify-content-center">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => stepUpAndDown(prod.maSP, false)}
                              >
                                <i className="fs-4 fas fa-minus" />
                              </button>
                              <span
                                className="fs-3 text-center px-4"
                                style={{ lineHeight: "130%" }}
                              >
                                {prod.soLuong}
                              </span>
                              <button
                                className="btn btn-link px-2"
                                onClick={() => stepUpAndDown(prod.maSP, true)}
                              >
                                <i className="fs-4 fas fa-plus" />
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0 fw-bold">
                                {(prod.giaBan * prod.soLuong).toLocaleString(
                                  "vi",
                                  {
                                    style: "currency",
                                    currency: "VND",
                                  }
                                )}
                              </h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end me-5">
                              <a
                                href="#!"
                                className="text-danger"
                                onClick={() => {
                                  delProdInCart(prod.maSP);
                                }}
                              >
                                <i className="fas fa-trash fa-lg" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              <div className="modal-footer">
                <h5 className="mx-5 py-3 fw-bold text-success fs-2">Tổng Tiền Hàng:{' '}
                  {this.props.cartStore.reduce((tongTien,prodInCart)=>{
                    return tongTien += prodInCart.soLuong * prodInCart.giaBan
                  },0).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h5>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Tiếp tục mua sắm
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";

// export default class ProductItem extends Component {
//   render() {
//     const { prod, xemChiTiet, addToCart } = this.props;
//     return (
//       <div className="card">
//         <img
//           src={prod.hinhAnh}
//           height={350}
//           className="w-100 p-3"
//           style={{ objectFit: "contain" }}
//           alt={"..."}
//         />
//         <div className="card-body">
//           <p className="fs-4 fw-bold">{prod.tenSP}</p>
//           <p>
//             Giá bán:{" "}
//             <span className="text-danger fs-5 fw-normal px-2">
//               {prod.giaBan.toLocaleString("vi", {
//                 style: "currency",
//                 currency: "VND",
//               })}
//             </span>
//           </p>
//           <button
//             className="btn btn-success"
//             type="button"
//             data-bs-toggle="modal"
//             data-bs-target="#modalInfo"
//             onClick={() => {
//               // this.xemChiTiet(prod)
//               //callback function
//               xemChiTiet(prod);
//             }}
//           >
//             Xem chi tiết
//           </button>
//           <button
//             type="button"
//             className="btn mx-3 btn-warning"
//             onClick={() => {
//               addToCart(prod);
//             }}
//           >
//             Add to cart
//             <i className="ms-2 fa-solid fa-cart-shopping"></i>
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

export default class ProductItem extends Component {
  render() {
    const { prod, xemChiTiet, addToCart } = this.props;
    return (
      <div className="card wow fadeInUp bg-dark">
        <div className="wrapper">
          <div className="colorProd" />
          <div
            className="imgProd"
            style={{ backgroundImage: `url(${prod.srcImg})` }}
          ></div>
          <div className="infoProd bg-white">
            <p className="nombreProd" style={{ color: prod.bgText }}>
              {prod.name}
            </p>
            <p className="extraInfo">{prod.desc}</p>
            <div className="actions">
              <div className="preciosGrupo">
                <p className="precio precioOferta">{prod.startingPrice}</p>
                <p className="precio precioProd">{prod.currentPrice}</p>
              </div>
              <div className="bakuretsu_icono action aFavs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
                </svg>
              </div>
              <div className="bakuretsu_icono action alCarrito">
                <svg
                  className="inCart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <title>Quitar del carrito</title>
                  <path d="M30 22H12M2 6h6l10 40h32l3.2-9.7" />
                  <circle cx={20} cy={54} r={4} />
                  <circle cx={46} cy={54} r={4} />
                  <circle cx={46} cy={22} r={16} />
                  <path d="M53 18l-8 9-5-5" />
                </svg>
                {/* <button className="me-5"
                  onClick={() => {
                    xemChiTiet(prod);
                  }}
                >
                  xem chi tiết
                </button> */}
                <svg
                  className="outCart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  onClick={() => {
                    addToCart(prod);
                  }}
                >
                  <title>Agregar al carrito</title>
                  <path d="M2 6h10l10 40h32l8-24H16" />
                  <circle cx={23} cy={54} r={4} />
                  <circle cx={49} cy={54} r={4} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

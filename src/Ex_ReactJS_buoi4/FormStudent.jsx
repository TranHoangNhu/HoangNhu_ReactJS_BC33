import React, { Component } from "react";
import { connect } from "react-redux";

class FormStudent extends Component {
  state = {
    values: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
    },
    isSubmit: true,
    arrStudent: [],
  };

  handleChangeInput = (e) => {
    let { value, id } = e.target; //id:price, value: '1000'
    let newValues = { ...this.state.values };
    newValues[id] = value;
    let newErrors = { ...this.state };
    //Xử lý lỗi:
    let messError = "";
    if (value.trim() === "") {
      messError = id + " không được bỏ trống !";
    } else {
      let dataType = e.target.getAttribute("data-type");
      if (dataType === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messError = id + " phải nhập số!";
        }
      }
      if (dataType === "email") {
        let regexEmail = /abc/;
        if (!regexEmail.test(value)) {
          messError = id + " không đúng định dạng!";
        }
      }
    }
    newErrors[id] = messError;

    let submit = false;
    for (let key in newValues) {
      //price = 1000 => price.toString() => '1000'.trim();
      if (newValues[key].toString().trim() === "") {
        submit = true;
      }
    }

    //setState
    this.setState(
      {
        values: newValues,
        errors: newErrors,
        isSubmit: submit,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); //Hàm này giúp chặn sự kiện reload của browser khi form submit
    console.log("submit", this.state);
    //Kiểm tra lỗi trước khi submit

    //Lấy ra object error từ state
    let { errors } = this.state;
    for (let key in errors) {
      if (errors[key] !== "") {
        alert("Dữ liệu không hợp lệ !");
        //Dừng lại
        return;
      }
    }
    //Thêm dữ liệu vào arrProduct
    // let newProduct = { ...this.state.values };
    // this.state.arrProduct.push(newProduct);
    //Cập nhật lại state
    // this.setState({
    //   arrProduct: this.state.arrProduct,
    // });
    this.props.addStudent(this.state);
  };

  // editProduct = (prodEdit) => {
  //   console.log(prodEdit);
  //   this.setState({
  //     values: prodEdit,
  //   });
  // };

  // deleteProduct = (idClick) => {
  //   console.log(idClick);
  //   // this.state.arrProduct = this.state.arrProduct.filter(prod => prod.id !== idClick);
  //   let indexDel = this.state.arrProduct.findIndex(
  //     (prod) => prod.id === idClick
  //   );

  //   this.state.arrProduct.splice(indexDel, 1);

  //   //setState để render lại giao diện
  //   this.setState({
  //     arrStudentz: this.state.arrStudentz,
  //   });
  // };

  // handleUpdate = () => {
  //   let { values, arrProduct } = this.state;
  //   //Dữ liệu đang edit: this.state.values
  //   //Dữ liệu cần thay đổi: this.state.arrProduct
  //   let prodUpdate = arrProduct.find((prod) => prod.id === values.id);

  //   // prodUpdate.name = values.name;
  //   // prodUpdate.price = values.price;
  //   // prodUpdate.description = values.description;
  //   // prodUpdate.image = values.image;
  //   // prodUpdate.productType = values.productType;
  //   for (let key in prodUpdate) {
  //     prodUpdate[key] = values[key];
  //   }

  //   this.setState({
  //     arrStudent: arrStudent,
  //   });
  // };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-header bg-dark text-warning">
              <h3>Product info</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Mã Sinh Viên</p>
                    <input
                      className="form-control"
                      id="id"
                      name="id"
                      onChange={this.handleChangeInput}
                      value={this.state.id}
                    />
                    <p className="text text-danger">{this.state.errors.id}</p>
                  </div>
                  <div className="form-group">
                    <p>Họ Và Tên</p>
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={this.handleChangeInput}
                      value={this.state.name}
                    />
                    <p className="text text-danger">{this.state.errors.name}</p>
                  </div>
                  <div className="form-group">
                    <p>Số Điện Thoại</p>
                    <input
                      data-type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={this.state.price}
                      onChange={this.handleChangeInput}
                    />
                    <p className="text text-danger">
                      {this.state.errors.price}
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Link Ảnh Sinh Viên</p>
                    <input
                      className="form-control"
                      id="image"
                      name="image"
                      onChange={this.handleChangeInput}
                      value={this.state.image}
                    />
                    <p className="text text-danger">
                      {this.state.errors.image}
                    </p>
                  </div>
                  <div className="form-group">
                    <p>Hệ Xét Tuyển</p>
                    <select
                      id="productType"
                      className="form-control"
                      onChange={this.handleChangeInput}
                      value={this.state.productType}
                    >
                      <option value={"Trung cấp"}>Trung cấp</option>
                      <option value={"Chính quy"}>Chính quy</option>
                      <option value={"Chất lượng cao"}>Chất lượng cao</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p className="pt-3">Địa chỉ thường trú</p>
                    <textarea
                      onChange={this.handleChangeInput}
                      className="form-control"
                      id="description"
                      name="description"
                      value={this.state.description}
                    />
                    <p className="text text-danger">
                      {this.state.errors.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-success"
                type="submit"
                disabled={this.state.isSubmit}
              >
                Create
              </button>
              <button
                className="btn btn-primary mx-2"
                type="button"
                disabled={this.state.isSubmit}
                onClick={() => {
                  this.handleUpdate();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => {
      const action = {
        type: "ADD_STUDENT",
        student,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormStudent);

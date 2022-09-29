import React, { Component } from "react";
import {connect} from 'react-redux';

class TableStudent extends Component {

  renderStudent = () =>{
    const {arrStudent} = this.props;
    return arrStudent.map((student, index) => {
      return (
        <tr key={index}>
          <td className="text-center text-white fw-bold pt-4">{student.id}</td>
          <td className="text-center text-white fw-bold pt-4">
            <img src={student.image} alt="..." width={50} height={50} />
          </td>
          <td className="text-center text-white fw-bold pt-4">{student.name}</td>
          <td className="text-center text-white fw-bold pt-4">{student.price}</td>
          <td className="text-center text-white fw-bold pt-4">{student.description}</td>
          <td className="text-center text-white fw-bold pt-4">
            <button
              className="btn btn-danger"
              // onClick={() => {
              //   delProduct(student.id);
              // }}
            >
              Xoá
            </button>
            <button
              className="btn btn-primary mx-2"
              // onClick={() => {
              //   editProduct(prod);
              // }}
            >
              Sửa
            </button>
          </td>
        </tr>
      );
    })
  }

  render() {
    // const { arrProduct, delProduct, editProduct } = this.props;
    return (
      <table className="table mt-5">
        <thead className="bg-dark text-white text-center text-uppercase fs-5">
          <tr>
            <th>Mã Sinh Viên</th>
            <th>Avatar</th>
            <th>Họ Tên</th>
            <th>Số Điện Thoại</th>
            <th>Địa Chỉ</th>
            <th><i className="fa-solid fa-gear"></i></th>
          </tr>
        </thead>
        <tbody>
          {this.renderStudent()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrStudent: state.StudentManageReducer.arrStudent,
  }
}

export default connect(mapStateToProps,null)(TableStudent)
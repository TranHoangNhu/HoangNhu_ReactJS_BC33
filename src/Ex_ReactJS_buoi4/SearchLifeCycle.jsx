import React, { Component } from "react";

export default class SearchLifeCycle extends Component {
  render() {
    return (
      <>
        <div className="container my-5 px-5">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded py-3"
              placeholder="Tìm kiếm thông tin sinh viên tại đây..."
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
      </>
    );
  }
}

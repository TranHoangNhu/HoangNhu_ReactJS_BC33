import React, { Component } from "react";
import FormStudent from "./FormStudent";
import SearchLifeCycle from "./SearchLifeCycle";
import TableStudent from "./TableStudent";

export default class ExFormStudent extends Component {
  render() {
    return (
      <>
      <style dangerouslySetInnerHTML={{__html: "\n            body{\n                background-color: #FAD961;\n                background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);                \n            }\n        " }} />
        <h1 className="text-center p-4 text-white fw-bold mt-4">QUẢN LÝ SINH VIÊN</h1>
        <SearchLifeCycle />
        <FormStudent>
          <TableStudent />
        </FormStudent>
      </>
    );
  }
}

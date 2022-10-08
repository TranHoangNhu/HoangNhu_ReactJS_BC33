import React from "react";

export default function CompleteList() {
  return (
    <>
      <ul className="todo" id="completed">
        <li>
          Task 1 đã xong
          <span className="buttons">
            <button>
              <i className="far fa-trash-alt" />
            </button>
            <button className="complete">
              <i className="fas fa-check-circle" />
            </button>
          </span>
        </li>
        <li>
          Task 2 đã xong
          <span className="buttons">
            <button>
              <i className="far fa-trash-alt" />
            </button>
            <button className="complete">
              <i className="fas fa-check-circle" />
            </button>
          </span>
        </li>
        <li>
          Task 3 đã xong
          <span className="buttons">
            <button>
              <i className="far fa-trash-alt" />
            </button>
            <button className="complete">
              <i className="fas fa-check-circle" />
            </button>
          </span>
        </li>
      </ul>
    </>
  );
}

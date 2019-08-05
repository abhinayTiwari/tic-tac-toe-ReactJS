import React, { Component } from "react";
import "../css/Square.css";

function Square(props) {
  return (
    <div className="square" onClick={props.handleClick}>
      {props.value}
    </div>
  );
}
export default Square;

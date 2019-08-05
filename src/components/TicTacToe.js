import React, { Component } from "react";
import Square from "./Square";
import "../css/TicTacToe.css";
// import { calculateWinner } from "./functionTicTacToe";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Array(9).fill(null),
      xIsNext: true
    };
    this.resetBoard = this.resetBoard.bind(this);
  }

  handleClick(i) {
    const value = this.state.value.slice();
    if (this.calculateWinner(value) || value[i]) return;
    value[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ value: value, xIsNext: !this.state.xIsNext });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.value[i]}
        handleClick={() => this.handleClick(i)}
      />
    );
  }
  resetBoard() {
    this.setState({ value: Array(9).fill(null), xIsNext: true });
    document.querySelector("body").classList.remove("celebration");
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    //let [d, e, f] = lines[0];

    for (let j = 0; j < lines.length; j++) {
      let a = lines[j][0],
        b = lines[j][1],
        c = lines[j][2];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    let status;
    const winner = this.calculateWinner(this.state.value);

    if (winner) {
      status = "Winner is " + winner;
      document.querySelector("body").classList.add("celebration");
    } else status = "Next Player is: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div className="tictactoe-container">
        <div className="status">{status}</div>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        <div>
          <button onClick={this.resetBoard} className="button danger">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TicTacToe;

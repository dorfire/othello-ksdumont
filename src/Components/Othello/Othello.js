import React, { Component } from "react";
import Score from "./Score/Score";
import Board from "./Board/Board";
import "./Othello.css";

class Othello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      currentTurn: "Black",
    };
  }
  render() {
    return (
      <div className="othello container">
        <h3 className="current-turn text-center">
          {this.state.currentTurn}'s turn
        </h3>
        <div className="game container">
          <Score player="Black" />
          <Board />
          <Score player="White" />
        </div>
      </div>
    );
  }
}
export default Othello;

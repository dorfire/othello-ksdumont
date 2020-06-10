import React, { Component } from "react";
import Completed from "./Components/Completed/Completed";
import Board from "./Components/Board/Board";
import Score from "./Components/Score/Score";
import OthelloContext from "./OthelloContext";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: "active",
      winner: null,
      blackScore: 0,
      whiteScore: 0,
    };
  }

  render() {
    let completed = this.state.status === "completed" ? <Completed /> : "";
    let board = this.state.gameStatus === "active" ? <Board /> : "";
    return (
      <OthelloContext.Provider value={this.state}>
        <div className="App container">
          <h1 className="text-center header">Othello</h1>
          <Score
            blackScore={this.state.blackScore}
            whiteScore={this.state.whiteScore}
          />
          {board}
          {completed}
        </div>
      </OthelloContext.Provider>
    );
  }
}

export default App;

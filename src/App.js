import React, { Component } from "react";
import Othello from "./Components/Othello/Othello";
import Completed from "./Components/Completed/Completed";
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
    let othello = this.state.gameStatus === "active" ? <Othello /> : "";
    let completed = this.state.status === "completed" ? <Completed /> : "";
    return (
      <div className="App container">
        <h1 className="text-center">Othello</h1>
        {othello}
        {completed}
      </div>
    );
  }
}

export default App;

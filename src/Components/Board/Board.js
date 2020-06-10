import React, { Component } from "react";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <table className="board table table-bordered">
        <tbody>
      
          <tr>
            <td></td><td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td>
          </tr>
      
          <tr>
            <td></td><td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td>
          </tr>
      
          <tr>
            <td></td><td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td>
          </tr>
      
          <tr>
            <td></td><td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td>
          </tr>
      
          <tr>
            <td></td><td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td>
          </tr>
      
          <tr>
            <td></td><td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td>
          </tr>
      
          <tr>
            <td></td><td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td>
          </tr>
      
          <tr>
            <td></td><td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td>
          </tr>
      
        </tbody>
      </table>
    );
  }
}

export default Board;

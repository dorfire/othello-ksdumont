import React from "react";
import "./Score.css";

const Score = (props) => {
  return (
    <div className="score">
      <div className="circle black">{props.blackScore}</div>
      <div className="circle white">{props.whiteScore}</div>
    </div>
  );
};

export default Score;

import React from "react";
import "./style.css";

const Title = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Top Score: {props.topscore}
    </div>
  </div>
);

export default Title;
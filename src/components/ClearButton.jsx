import React from "react";
import "./ClearButton.css";

export const ClearButton = props => {
  return (
    <div onClick={props.handleClear} className="clear-btn">
      {props.children}
    </div>
  );
};

import React from "react";
import "../Scss/button.scss";
const Button = ({ text }) => {
  return (
    <div className="button-wrapper">
      <button className="button button-font-link">{text}</button>
    </div>
  );
};

export default Button;

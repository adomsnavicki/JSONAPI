import React from "react";
import Button from "./Button";
import "../Scss/title.scss";
const Title = ({ text }) => {
  return (
    <div className="title-wrapper">
      <h1 className="title-text font-link">{text}</h1>
      <Button text="Sign Up" />
    </div>
  );
};

export default Title;

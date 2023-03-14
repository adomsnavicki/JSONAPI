import React from "react";
import SignUpFormButton from "./SignUpFormButton";
import "../Scss/title.scss";
const Title = ({ text }) => {
  return (
    <div className="title-wrapper">
      <h1 className="title-text font-link">{text}</h1>
      <SignUpFormButton text="Sign Up" />
    </div>
  );
};

export default Title;

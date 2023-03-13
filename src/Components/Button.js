import React from "react";
import { useState } from "react";
import "../Scss/signUpForm.scss";
import SignUpLogo from "../Svg/SignUpLogo.svg";

import "../Scss/button.scss";
const Button = ({ text }) => {
  const DataObj = {
    name: "Jonas",
    username: "Baronas",
    email: "15",
    phone: "45646546",
    website: "",
    profession: "",
  };

  const [form, setForm] = useState([]);
  const signUpHandler = () => {
    setForm([DataObj]);
  };

  return (
    <>
      <div className="button-wrapper">
        <button onClick={signUpHandler} className="button button-font-link">
          {text}
        </button>
      </div>

      {form &&
        form.length > 0 &&
        form.map((formData, index) => (
          <div key={index}>
            <form className="register-form">
              <button className="close-form-button">X</button>
              <img
                className="sign-up-logo"
                src={SignUpLogo}
                alt="form-logo"
              ></img>
              <div className="form-control">
                <label className="contact-name">Name:</label>
                <input className="text-input" type="text"></input>
              </div>
              <div className="form-control">
                <label className="contact-name">Username:</label>
                <input className="text-input" type="text"></input>
              </div>
              <div className="form-control">
                <label className="contact-name">Email:</label>
                <input className="text-input" type="text"></input>
              </div>
              <div className="form-control">
                <label className="contact-name">Phone:</label>
                <input className="text-input" type="text"></input>
              </div>
              <div className="form-control">
                <label className="contact-name">Website:</label>
                <input className="text-input" type="text"></input>
              </div>
              <div className="form-control">
                <label className="contact-name">Profession:</label>
                <input className="text-input" type="text"></input>
              </div>
              <input className="create-button" type="submit" />
            </form>
          </div>
        ))}
    </>
  );
};

export default Button;

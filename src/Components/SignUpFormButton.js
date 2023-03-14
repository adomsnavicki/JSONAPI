import React from "react";
import { useState } from "react";
import "../Scss/signUpForm.scss";
import SignUpLogo from "../Svg/SignUpLogo.svg";
import "../Scss/button.scss";

const apiURL = `http://localhost:3000/`;

const SignUpFormButton = ({ text }) => {
  let DataObj = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    profession: "",
  };
  const [form, setForm] = useState([]);
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [profession, setProfession] = useState("");

  const nameValue = (e) => {
    setName(e.target.value);
  };

  const userNameValue = (e) => {
    setUserName(e.target.value);
  };

  const emailValue = (e) => {
    setEmail(e.target.value);
  };
  const phoneValue = (e) => {
    setPhone(e.target.value);
  };
  const websiteValue = (e) => {
    setWebsite(e.target.value);
  };
  const professionValue = (e) => {
    setProfession(e.target.value);
  };

  const signUpHandler = () => {
    setForm([DataObj]);
    setShow(true);
  };

  const createProfile = (e) => {
    e.preventDefault();
    DataObj = {
      name: name,
      username: userName,
      email: email,
      phone: phone,
      website: website,
      profession: profession,
    };

    fetch(`${apiURL}users`, {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        name: name,
        username: userName,
        email: email,
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232",
          },
        },
        phone: phone,
        website: website,
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models",
        },
        profession: profession,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setForm((prev) => [DataObj, ...prev]);

    setShow(false);
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
            {show ? (
              <form className="register-form" onSubmit={createProfile}>
                <button
                  onClick={() => setShow(!show)}
                  className="close-form-button"
                >
                  X
                </button>
                <img
                  className="sign-up-logo"
                  src={SignUpLogo}
                  alt="form-logo"
                ></img>
                <div className="form-control">
                  <label className="contact-name">Name:</label>
                  <input
                    className="text-input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={nameValue}
                  ></input>
                </div>
                <div className="form-control">
                  <label className="contact-name">Username:</label>
                  <input
                    className="text-input"
                    type="text"
                    value={userName}
                    onChange={userNameValue}
                  ></input>
                </div>
                <div className="form-control">
                  <label className="contact-name">Email:</label>
                  <input
                    className="text-input"
                    type="text"
                    value={email}
                    onChange={emailValue}
                  ></input>
                </div>
                <div className="form-control">
                  <label className="contact-name">Phone:</label>
                  <input
                    className="text-input"
                    type="text"
                    value={phone}
                    onChange={phoneValue}
                  ></input>
                </div>
                <div className="form-control">
                  <label className="contact-name">Website:</label>
                  <input
                    className="text-input"
                    type="text"
                    value={website}
                    onChange={websiteValue}
                  ></input>
                </div>
                <div className="form-control">
                  <label className="contact-name">Profession:</label>
                  <input
                    className="text-input"
                    type="text"
                    value={profession}
                    onChange={professionValue}
                  ></input>
                </div>
                <input className="create-button" type="submit" />
              </form>
            ) : null}
          </div>
        ))}
    </>
  );
};

export default SignUpFormButton;

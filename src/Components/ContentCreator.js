import React from "react";
import userLogo from "../Svg/user.svg";
import { Link } from "react-router-dom";
import "../Scss/item.scss";

const ContentCreator = ({ item, link }) => {
  return (
    <div className="container-content">
      <div className="item-wrapper">
        {item &&
          item.length > 0 &&
          item.map((content, index) => (
            <div key={index} className="list-wrapper">
              <Link to={link + content.id}>
                <h1 className="item-title">{content.name}</h1>
                <img className="user-image" src={userLogo} alt="user"></img>
                <span className="item-introduction">
                  {content.introduction}
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContentCreator;

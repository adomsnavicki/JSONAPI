import React from "react";

import { Link } from "react-router-dom";

const ContentCreator = ({ item, title, link }) => {
  return (
    <div className="container-content">
      <div className="posts-wrapper">
        <h1 className="posts-title">{title}</h1>
        {item &&
          item.length > 0 &&
          item.map((content, index) => (
            <div key={index} className="posts-list-wrapper">
              <ul className="posts-list">
                <li className="post-item">
                  <Link to={link}>
                    {content.title}
                    {content.name}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContentCreator;

import React from "react";
import { Link } from "react-router-dom";
import "../Scss/posts.scss";
import PostsImage from "../Svg/Posts.svg";
const PostCreator = ({ item, link }) => {
  return (
    <div className="posts-container">
      <div className="posts-wrapper">
        <div className="posts-image-wrapper">
          <h1 className="posts-image-title font-link">Posts</h1>
          <img className="posts-image" src={PostsImage} alt="posts-logo"></img>
        </div>

        {item &&
          item.length > 0 &&
          item.map((post, index) => (
            <Link className="post-link" key={index} to={link + post.id}>
              <div className="post-item">
                <h2 className="post-title">{post.title}</h2>

                <span className="post-body">{post.body}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PostCreator;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Scss/postPage.scss";
const apiURL = `http://localhost:3000/`;

const JsonPostPage = () => {
  let { id } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState();

  function toTitleCase(str) {
    const titleCase = str
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    return titleCase;
  }

  const removeCommentHandler = (id) => {
    fetch(`${apiURL}comments/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  useEffect(() => {
    axios.get(`${apiURL}posts/${id}?_embed=comments`).then((posts) => {
      const postsData = posts.data;
      setPost([postsData]);
      setComments(postsData.comments);
    });
  }, [id]);

  return (
    <div className="post-container">
      {post &&
        post.length > 0 &&
        post.map((post, index) => (
          <div key={index} className="post-item">
            <h1 className="post-title">Author({toTitleCase(post.author)})</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.comments.body}</p>
          </div>
        ))}
      <h2>Comments:</h2>
      <div className="comments-container">
        {comments &&
          comments.length > 0 &&
          comments.map((comment, index) => (
            <div className="comment-wrapper" key={index}>
              <p className="comment-body">{comment.body}</p>
              <span className="comment-email">{comment.email}</span>
              <button onClick={() => removeCommentHandler(comment.id)}>
                Remove Comment
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JsonPostPage;

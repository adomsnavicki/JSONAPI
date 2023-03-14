import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCreator from "../Components/PostCreator";

const apiURL = `http://localhost:3000/`;
const JsonPostsPage = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get(`${apiURL}posts?`).then((posts) => {
      const postsData = posts.data;
      setPosts(postsData);
    });
  }, []);

  return (
    <div className="posts-wrapper">
      <PostCreator item={posts} link={"/post/"} />
    </div>
  );
};

export default JsonPostsPage;

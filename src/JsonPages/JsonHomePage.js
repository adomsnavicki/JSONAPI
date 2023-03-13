import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "../Components/Title";
import UserCreator from "../Components/UserCreator";
import PostCreator from "../Components/PostCreator";

const apiURL = `http://localhost:3000/`;
const JsonHomePage = () => {
  let { id } = useParams();
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get(`${apiURL}posts?_limit=6`).then((posts) => {
      const postsData = posts.data;
      setPosts(postsData);
    });
  }, []);

  useEffect(() => {
    axios.get(`${apiURL}users?_limit=3?id=${id}`).then((users) => {
      const usersData = users.data;
      setUsers(usersData);
    });
  }, [id]);

  return (
    <div>
      <Title text="Share your moments!" />
      <UserCreator item={users} link={"/user/"} />
      <PostCreator item={posts} link={"/post/"} />
    </div>
  );
};

export default JsonHomePage;

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "../Components/Title";
import UserCreator from "../Components/UserCreator";
import PostCreator from "../Components/PostCreator";

const apiURL = `http://localhost:3000/`;

const JsonMainPage = () => {
  let { id } = useParams();
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();
  const [albums, setAlbums] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    axios.get(`${apiURL}posts?_limit=10`).then((posts) => {
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
  useEffect(() => {
    axios.get(`${apiURL}albums?_limit=10`).then((albums) => {
      const albumsData = albums.data;
      setAlbums(albumsData);
    });
  }, []);
  useEffect(() => {
    axios.get(`${apiURL}comments?_limit=10`).then((comments) => {
      const commentsData = comments.data;
      setComments(commentsData);
    });
  }, []);

  return (
    <div>
      <Title text="Share your moments!" />

      <UserCreator item={users} link={"/user/"} />
      <PostCreator item={posts} link={"/posts/"} />
    </div>
  );
};

export default JsonMainPage;

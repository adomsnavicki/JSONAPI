import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import ContentCreator from "../Components/ContentCreator";
const apiURL = `http://localhost:3000/`;

const JsonMainPage = () => {
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
    axios.get(`${apiURL}users?_limit=10`).then((users) => {
      const usersData = users.data;
      setUsers(usersData);
    });
  }, []);
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
      <h1>TITLE</h1>
      <ContentCreator item={posts} title="Posts:" link={"/posts/"} />
      <ContentCreator item={users} title="Users:" link={"/users/"} />
      <ContentCreator item={albums} title="Albums:" link={"/albums/"} />
      <ContentCreator item={comments} title="Comments:" link={"/comments/"} />
    </div>
  );
};

export default JsonMainPage;

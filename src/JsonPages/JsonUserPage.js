import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ContentCreator from "../Components/ContentCreator";

const apiURL = `http://localhost:3000/`;

const JsonUserPage = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`${apiURL}users?_limit=3`).then((user) => {
      const userData = user.data;
      setUser(userData);
    });
  }, []);

  return (
    <div>
      <ContentCreator item={user} link={"/user/"} />
    </div>
  );
};

export default JsonUserPage;

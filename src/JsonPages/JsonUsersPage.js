import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Scss/usersPage.scss";

import axios from "axios";
import UserCreator from "../Components/UserCreator";

const apiURL = `http://localhost:3000/`;

const JsonUsersPage = () => {
  let { id } = useParams();
  const [users, setUsers] = useState();
  useEffect(() => {
    axios.get(`${apiURL}users?`).then((users) => {
      const usersData = users.data;
      setUsers(usersData);
    });
  }, [id]);
  return (
    <div className="users-wrapper">
      <UserCreator className="test" item={users} link={`/user/`} />
    </div>
  );
};

export default JsonUsersPage;

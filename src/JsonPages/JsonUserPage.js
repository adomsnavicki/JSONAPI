import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import userLogo from "../Svg/user.svg";
import "../Scss/user.scss";

const apiURL = `http://localhost:3000/`;

const JsonUserPage = () => {
  let { id } = useParams();
  const [user, setUser] = useState();
  const [userAlbums, setUserAlbums] = useState();
  const [userAlbumsImages, setAlbumsImages] = useState();

  useEffect(() => {
    axios.get(`${apiURL}users?id=${id}`).then((user) => {
      const userData = user.data;
      setUser(userData);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`${apiURL}albumsImages?albumId=${id}`).then((user) => {
      const userData = user.data;
      setAlbumsImages(userData);
    });
  }, [id]);

  return (
    <div>
      {user &&
        user.length > 0 &&
        user.map((user, index) => (
          <div className="user-wrapper" key={index}>
            <div className="user-image">
              <img className="user-image" src={userLogo} alt="user"></img>
            </div>
            <div className="user-content">
              {" "}
              <h1>{user.name}</h1>
              <ul>
                Contacts:
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>Website: {user.website}</li>
              </ul>
              <ul>
                Address:
                <li>Street: {user.address.street}</li>
                <li>Suite: {user.address.suite}</li>
                <li>City: {user.address.city}</li>
                <li>Zipcode: {user.address.zipcode}</li>
              </ul>
              <ul>
                Company:
                <li>Name: {user.company.name}</li>
                <li>CatchPhrase: {user.company.catchPhrase}</li>
                <li>Profession: {user.profession}</li>
              </ul>
            </div>
          </div>
        ))}
      <h1>Albums:</h1>
      {userAlbumsImages &&
        userAlbumsImages.length > 0 &&
        userAlbumsImages.map((albums, index) => (
          <div>
            <div className="album-title">{albums.title}</div>
            <img src={albums.url}></img>
          </div>
        ))}
    </div>
  );
};

export default JsonUserPage;

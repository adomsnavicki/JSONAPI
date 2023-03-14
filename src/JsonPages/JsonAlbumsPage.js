import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import albumLogo from "../Svg/album.svg";
import albumTitle from "../Svg/albumstitle.svg";
import "../Scss/albumsPage.scss";

const apiURL = `http://localhost:3000/`;

const JsonAlbumsPage = () => {
  const [albums, setAlbums] = useState();

  useEffect(() => {
    axios.get(`${apiURL}albums?`).then((albums) => {
      const albumsData = albums.data;
      setAlbums(albumsData);
    });
  }, []);

  return (
    <>
      <div className="albums-top-title">
        <img
          className="albums-title-logo"
          alt="albums-title"
          src={albumTitle}
        ></img>
        <h1 className="albums-top-title-text">Albums:</h1>
      </div>

      <div className="albums-container">
        {albums &&
          albums.length > 0 &&
          albums.map((album, index) => (
            <div key={index} className="albums-wrapper">
              <Link to={`/album/${album.albumId}/${album.id}`}>
                <h2 className="albums-title">{album.title}</h2>
                <img className="albums-logo" src={albumLogo} alt="album"></img>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default JsonAlbumsPage;

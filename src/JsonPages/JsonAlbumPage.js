import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Scss/album.scss";
const apiURL = `http://localhost:3000/`;

const JsonAlbumPage = () => {
  let { id } = useParams();

  const [albumPhotos, setAlbumPhotos] = useState();
  const [albumTitle, setAlbumTitle] = useState([]);

  useEffect(() => {
    axios.get(`${apiURL}photos?albumId=${id}`).then((user) => {
      const userData = user.data;
      setAlbumPhotos(userData);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`${apiURL}albums/${id}`).then((user) => {
      const userData = user.data;
      setAlbumTitle([userData]);
    });
  }, [id]);
  console.log(albumPhotos);
  return (
    <div className="album-container">
      {albumTitle &&
        albumTitle.length > 0 &&
        albumTitle.map((item, index) => {
          return (
            <h1 className="album-title" key={index}>
              {item.title}
            </h1>
          );
        })}
      {albumPhotos &&
        albumPhotos.length > 0 &&
        albumPhotos.map((photos, index) => (
          <div key={index} className="album-photos-wrapper">
            <img src={photos.thumbnailUrl} alt="album"></img>
          </div>
        ))}
    </div>
  );
};

export default JsonAlbumPage;

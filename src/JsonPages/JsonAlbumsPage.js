import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
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
    <div>
      {albums &&
        albums.length > 0 &&
        albums.map((album) => (
          <div>
            <h1>{album.title}</h1>
            <img src={album.thumbnailUrl} alt="album"></img>
          </div>
        ))}
    </div>
  );
};

export default JsonAlbumsPage;

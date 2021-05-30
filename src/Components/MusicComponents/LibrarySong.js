import React from "react";

import { Dropdown } from "react-bootstrap";
const LibrarySong = ({ song, currentSong, setCurrentSong }) => {
  // handlers
  const handleSelectSong = () => {
    setCurrentSong(song);
  };

  return (
    <div
      className={`library-song ${song.id === currentSong.id ? "active" : ""}`}
      onClick={handleSelectSong}
    >
      {/* <img src={song.cover} alt={song.name} /> */}
      <div className="song-description">
        <a>{song.name}</a>
      </div>
    </div>
  );
};

export default LibrarySong;

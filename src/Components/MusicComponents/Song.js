import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      {/* <img src={currentSong.cover} alt={currentSong.name} /> */}
      <p>
        <span>{currentSong.name} , </span>
        <span>{currentSong.artist}</span>
      </p>
    </div>
  );
};

export default Song;

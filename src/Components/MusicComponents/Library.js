import React from "react";
import { Dropdown } from "react-bootstrap";
import { Button } from "@material-ui/core";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  isLibOpen,
  setIsLibOpen,
}) => {
  const renderSongItems = () => {
    return songs.map((song) => (
      <LibrarySong
        key={song.id}
        song={song}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
      />
    ));
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="library-songs">
            {renderSongItems()}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Library;

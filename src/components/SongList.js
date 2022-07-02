import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  return (
    <div>
      {props.songs.map((song) => {
        return (
          <div key={song.title}>
            {song.title}
            <button onClick={() => props.selectSong(song)}>Select</button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateProps, { selectSong })(SongList);

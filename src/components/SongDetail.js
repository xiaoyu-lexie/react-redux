import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  if (!props.song) {
    return <div>Please select a song</div>;
  }
  return (
    <div>
      <h3>Detail:</h3>
      <div>{props.song.title}</div>
      <div>{props.song.duration}</div>
    </div>
  );
};

const mapStateProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateProps)(SongDetail);

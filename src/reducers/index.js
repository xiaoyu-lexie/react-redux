import { combineReducers } from "redux";

// songsReducer is just a static song list, kinda overkill for a reducer, but adding some complexities to this application
const songsReducer = () => {
  return [
    { title: "No.1", duration: "1:05" },
    { title: "No.2", duration: "2:05" },
    { title: "No.3", duration: "3:05" },
    { title: "No.4", duration: "4:05" },
    { title: "No.5", duration: "5:05" },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});

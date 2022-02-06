import React from "react";
import './Library.css';
import { useSelector } from "react-redux";
import Song from "../Song";

function Library() {
  const allSongs = useSelector(state => state.songs.allSongs);
  const sessionUser = useSelector(state => state.session.user);

  console.log(allSongs);
  console.log(sessionUser);

  let yourSongs = [];
  if (allSongs) {
    allSongs.forEach(ele => {
      if (ele.user_id === sessionUser.id) {
        yourSongs.push(ele);
      }
    })
  }

  return (
    <ul className="one-song">
      {
        allSongs &&
        yourSongs.map(ele => (
          <Song key={ele.id} ele={ele} />
        ))
      }
    </ul>
  )
}

export default Library;

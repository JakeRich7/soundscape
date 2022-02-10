import React from "react";
import './Library.css';
import { useSelector } from "react-redux";
import Song from "../Song";

function Library() {
  const allSongs = useSelector(state => state.songs.allSongs);
  const sessionUser = useSelector(state => state.session.user);

  let yourSongs = [];
  if (allSongs) {
    allSongs.forEach(ele => {
      if (ele.user_id === sessionUser.id) {
        yourSongs.push(ele);
      }
    })
  }
  if (yourSongs) {
    yourSongs.sort(function (a, b) {
      return a.id - b.id;
    })
  }

  return (
    <>
      <h2 className="library-title">Your Tracks</h2>
      <ul className="one-song">
        {
          allSongs &&
          yourSongs.map(ele => (
            <Song key={ele.id} ele={ele} />
          ))
        }
      </ul>
    </>
  )
}

export default Library;

import React from "react";
import { useSelector } from 'react-redux';
import './Home.css';
import Song from "../Song";

function Home() {
  const allSongs = useSelector(state => state.songs.allSongs);
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <h2 className="home-title">Discover</h2>
      <ul className="one-song">
        {
          allSongs &&
          sessionUser &&
          allSongs.map(ele => (
            <Song key={ele.id} ele={ele} />
          ))
        }
        {
          !sessionUser &&
          <li>Sign in view and listen to awesome music!</li>
        }
      </ul>
    </>
  )
}

export default Home;

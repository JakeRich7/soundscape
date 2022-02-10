import React from "react";
import { useSelector } from 'react-redux';
import './Home.css';
import Song from "../Song";
import { useState } from "react";

function Home() {
  const allSongs = useSelector(state => state.songs.allSongs);
  const sessionUser = useSelector(state => state.session.user);
  const [sortBy, setSortBy] = useState("created-first");

  const handleOption = (e) => {
    setSortBy(e.target.value);
  }

  let filteredSongs = [];
  if (allSongs) {
    if (sortBy === "created-first") {
      allSongs.sort(function (a, b) {
        return a.id - b.id;
      })
      allSongs.forEach(ele => {filteredSongs.push(ele)})
    } else if (sortBy === "created-last") {
      allSongs.sort(function (a, b) {
        return b.id - a.id;
      })
      allSongs.forEach(ele => {filteredSongs.push(ele)})
    } else if (sortBy === "favorite") {
      filteredSongs = allSongs.filter(song => song.favorite === true)
    }
  }

  return (
    <>
      <h2
        className="home-title"
      >
        Discover
        <label className="sorter-label" htmlFor="sorter">Sort:</label>
        <select onChange={handleOption} className="sorter-dropdown" id="sorter">
          <option value="created-first">First Created</option>
          <option value="created-last">Last Created</option>
          <option value="favorite">Favorites</option>
        </select>
      </h2>
      <ul className="one-song">
        {
          allSongs &&
          sessionUser &&
          filteredSongs.map(ele => (
            <Song key={ele.id} ele={ele} />
          ))
        }
      </ul>
    </>
  )
}

export default Home;

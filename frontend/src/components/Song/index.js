import React from "react";
import './Song.css';

function Song({ ele }) {

  return(
    <li>
      <div>
        <ul>
          <li>id: {ele.id}</li>
          <li>title: {ele.title}</li>
          <li>url: {ele.url}</li>
        </ul>
      </div>
    </li>
  )
}

export default Song;

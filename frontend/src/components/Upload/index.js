import React, { useState } from "react";
import './Upload.css';
import * as songActions from '../../store/songs';
import { useDispatch, useSelector } from "react-redux";

function Upload() {
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(songActions.createOne({ title, url, userId }));
    dispatch(songActions.getAll());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        URL
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <button type="submit">Upload</button>
    </form>
  )
}

export default Upload;

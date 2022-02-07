import React from "react";
import './Song.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as songActions from '../../store/songs';

function Song({ ele }) {
  const [toggleForm, setToggleForm] = useState(true);
  const [editButtonText, setEditButtonText] = useState("Edit");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const songId = ele.id;
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(songActions.editOne({ title, url, songId }));
    await dispatch(songActions.getAll());
    setToggleForm(true);
    setEditButtonText("Edit");
  };

  const toggleEditForm = (e) => {
    e.preventDefault();
    if (toggleForm) {
      setToggleForm(false);
      setEditButtonText("Cancel");
    } else {
      setToggleForm(true);
      setEditButtonText("Edit");
    }
  };

  let songContent;

  if (toggleForm === true) {
    songContent = (
      <ul>
        <li>title: {ele.title}</li>
        <li>url: {ele.url}</li>
      </ul>
    )
  } else {
    songContent = (
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
        <button type="submit">Confirm Edit</button>
      </form>
    )
  }

  return (
    <li>
      <div>
        <div>
          {songContent}
        </div>
        {
          ele.user_id === userId &&
          <div>
            <button onClick={toggleEditForm}>{editButtonText}</button>
          </div>
        }
      </div>
    </li>
  )
}

export default Song;

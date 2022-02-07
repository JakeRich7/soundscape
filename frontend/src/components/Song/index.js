import React from "react";
import './Song.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as songActions from '../../store/songs';

function Song({ ele }) {
  const [toggleForm, setToggleForm] = useState(true);
  const [editButtonText, setEditButtonText] = useState("Edit");
  const [title, setTitle] = useState(ele.title);
  const [url, setUrl] = useState(ele.url);
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

  const deleter = async (e) => {
    await dispatch(songActions.deleteOne({ songId }));
    await dispatch(songActions.getAll());
  }

  let songContent;
  if (toggleForm === true) {
    songContent = (
      <div className="song-normal-view">
        <audio controls>
          <source src={ele.url} type="audio/mp3"></source>
        </audio>
        <div className="song-username-title">
          <div className="song-username">{ele.User.username}</div>
          <div className="song-title">{ele.title}</div>
        </div>
      </div>
    )
  } else {
    songContent = (
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="input-fields-title-url">
          <label>
            Title
            <input
              className="title-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            URL
            <input
              className="url-input"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="confirm-edit-button" type="submit">Confirm Edit</button>
        <button className="delete-button" onClick={deleter}>Delete</button>
      </form>
    )
  }

  return (
    <li className="full-song-box">
      <div className="all-song-content">
        <div>
          {songContent}
        </div>
        {
          ele.user_id === userId &&
          <button className="edit-button" onClick={toggleEditForm}>{editButtonText}</button>
        }
      </div>
    </li>
  )
}

export default Song;

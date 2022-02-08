import React from "react";
import ReactAudioPlayer from "react-audio-player";
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
  const [errors, setErrors] = useState([])

  const uploadValidation = (e) => {
    let newErrors = [];

    if (title.length < 1) {
      newErrors.push('Title cannot be empty');
    }
    if (url.length < 1) {
      newErrors.push('URL cannot be empty');
    }

    if (newErrors.length) {
      newErrors.unshift("Edit Errors:");
      setErrors(newErrors);
      return true;
    } else return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (uploadValidation()) {
    } else {
      await dispatch(songActions.editOne({ title, url, songId }));
      await dispatch(songActions.getAll());
      setToggleForm(true);
      setEditButtonText("Edit");
      setErrors([]);
    }
  };

  const toggleEditForm = (e) => {
    e.preventDefault();
    if (toggleForm) {
      setToggleForm(false);
      setEditButtonText("Cancel");
    } else {
      setToggleForm(true);
      setEditButtonText("Edit");
      setErrors([]);
    }
  };

  const deleter = async (e) => {
    e.preventDefault();
    await dispatch(songActions.deleteOne({ songId }));
    await dispatch(songActions.getAll());
  }

  const audioErrors = () => {
    console.log(`${ele.url} is an invalid url!!! How dare you...`);
  }

  let songContent;
  if (toggleForm === true) {
    songContent = (
      <div className="song-normal-view">
        <ReactAudioPlayer onError={audioErrors} controls src={ele.url} />
        <div className="song-username-title">
          <div className="song-username">{ele.User.username}</div>
          <div className="song-title">{ele.title}</div>
        </div>
      </div>
    )
  } else {
    songContent = (
      <form className="edit-form" onSubmit={handleSubmit}>
        <ul className="edit-song-errors-ul">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className="input-fields-title-url">
          <label>
            Title:
            <input
              className="title-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            URL:
            <input
              className="url-input"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="confirm-edit-button" onClick={handleSubmit}>Confirm Edit</button>
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

import React, { useState } from "react";
import './Upload.css';
import * as songActions from '../../store/songs';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Upload() {
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
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
      setErrors(newErrors);
      console.log(newErrors);
      return true;
    } else return false;
  }

  const handleSubmit = async (e) => {
    if (uploadValidation()) {
      e.preventDefault()
    } else {
      await dispatch(songActions.createOne({ title, url, userId }));
      await dispatch(songActions.getAll());
    }
  };

  return (
    <div className="upload-form-div">
      <form className="upload-form" onSubmit={handleSubmit}>
      <ul className="upload-errors-ul">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
        <label className="title-label">
          Title:
        </label>
        <input
          className="upload-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="url-label">
          URL:
        </label>
        <textarea
          className="upload-url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <Link className="upload-create-button-link" onClick={handleSubmit} to="/library">Upload</Link>
      </form>
    </div>
  )
}

export default Upload;

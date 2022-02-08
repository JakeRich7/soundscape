import React from "react";
import './Comment.css';
import { useSelector } from "react-redux";
import { useState } from "react";

function Comments({ ele }) {
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editButtonText, setEditButtonText] = useState("Edit");

  const toggleCommentEdit = (e) => {
    if (editButtonText === "Edit") {
      setEditButtonText("Cancel");
    } else {
      setEditButtonText("Edit");
    }
    setToggleEdit(!toggleEdit);
  }

  return (
    <div className="specific-comment-area" key={ele.id}>
    <div className="specific-comment-body">{ele.body}</div>
    {
      ele.user_id === userId &&
      <div className="specific-comment-buttons">
        <button className="edit-comment-toggle-button" onClick={toggleCommentEdit}>{editButtonText}</button>
        <button className="delete-comment-button" >Delete</button>
      </div>
    }
    {
      toggleEdit &&
      <form className="edit-comment-form">
        <textarea
        className="edit-comment-textarea"
        required
        >
        </textarea>
        <button className="edit-comment-confirm-button">
          Confirm
        </button>
      </form>
    }
  </div>
  )
}

export default Comments;

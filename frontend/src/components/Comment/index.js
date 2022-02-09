import React from "react";
import './Comment.css';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as commentActions from '../../store/comments';

function Comments({ ele }) {
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editButtonText, setEditButtonText] = useState("Edit");
  const dispatch = useDispatch();
  const [editCommentText, setEditCommentText] = useState("");

  const toggleCommentEdit = (e) => {
    if (editButtonText === "Edit") {
      setEditButtonText("Cancel");
      setEditCommentText("");
    } else {
      setEditButtonText("Edit");
      setEditCommentText("");
    }
    setToggleEdit(!toggleEdit);
  }

  let commentId = ele.id;

  const deleteComment = async (e) => {
    e.preventDefault();
    await dispatch(commentActions.deleteOne({ commentId }));
    await dispatch(commentActions.getAll());
  }

  const editComment = async (e) => {
    if (editCommentText) {
      e.preventDefault();
      await dispatch(commentActions.editOne({ commentId, editCommentText }));
      await dispatch(commentActions.getAll());
      setEditButtonText("Edit");
      setToggleEdit(!toggleEdit);
    }
  }

  return (
    <div className="specific-comment-area" key={ele.id}>
    <div className="specific-comment-body">{ele.body}</div>
    {
      ele.user_id === userId &&
      <div className="specific-comment-buttons">
        <button className="edit-comment-toggle-button" onClick={toggleCommentEdit}>{editButtonText}</button>
      </div>
    }
    {
      toggleEdit &&
      <form className="edit-comment-form">
        <textarea
        className="edit-comment-textarea"
        value={editCommentText}
        onChange={(e) => setEditCommentText(e.target.value)}
        required
        >
        </textarea>
        <button
        onClick={editComment}
        className="edit-comment-confirm-button"
        >
          Confirm
        </button>
        <button className="delete-comment-button" onClick={deleteComment}>Delete</button>
      </form>
    }
  </div>
  )
}

export default Comments;

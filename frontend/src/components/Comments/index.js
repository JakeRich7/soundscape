import React from "react";
import './Comments.css';
import { useSelector } from "react-redux";
import { useState } from "react";
import Comment from '../Comment';
import * as commentActions from '../../store/comments';
import { useDispatch } from "react-redux";

function Comments({ songId }) {
  const allComments = useSelector(state => state.comments.allComments);
  const sessionUser = useSelector(state => state.session.user);
  const [addCommentValue, setAddCommentValue] = useState("");
  const dispatch = useDispatch();

  let userId = sessionUser.id;

  let songComments = [];
  allComments.forEach(ele => {
    if (ele.song_id === songId) {
      songComments.push(ele);
    }
  })

  const addComment = async (e) => {
    if (addCommentValue) {
      e.preventDefault();
      setAddCommentValue("");
      await dispatch(commentActions.createOne({ songId, userId, addCommentValue }));
      await dispatch(commentActions.getAll());
    }
  }

  return (
    <div>
      {
        allComments &&
        <div>
          <>
            {
              !songComments.length &&
              <div>No comments yet! Be the first to comment!</div>
            }
            {
              songComments.map(ele => (
                <Comment key={ele.id} ele={ele} />
              ))
            }
          </>
          <form className="comments-area-add-form">
            <textarea
              className="comments-add-textarea"
              value={addCommentValue}
              onChange={(e) => setAddCommentValue(e.target.value)}
              required
            >
            </textarea>
            <button onClick={addComment} className="comments-add-submit-button">Add Comment</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Comments;

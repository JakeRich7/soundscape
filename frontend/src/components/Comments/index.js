import React from "react";
import './Comments.css';
import { useSelector } from "react-redux";
import { useState } from "react";
import Comment from '../Comment';

function Comments({ songId }) {
  const allComments = useSelector(state => state.comments.allComments);

  let songComments = [];
  allComments.forEach(ele => {
    if (ele.song_id === songId) {
      songComments.push(ele);
    }
  })

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
                <Comment key={ele.id} ele={ele}/>
              ))
            }
          </>
          <form className="comments-area-add-form">
            <textarea
              className="comments-add-textarea"
              required
            >
            </textarea>
            <button className="comments-add-submit-button">Add Comment</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Comments;

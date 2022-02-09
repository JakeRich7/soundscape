import { csrfFetch } from "./csrf";

const GET_COMMENTS = 'comments/getAll';
const ADD_COMMENT = 'comments/addOne';
const EDIT_COMMENT = 'comments/editOne';
const DELETE_COMMENT = 'comments/deleteOne';

const getComments = (allComments) => {
  return {
    type: GET_COMMENTS,
    payload: allComments,
  };
};

const addComment = (newComment) => {
  return {
    type: ADD_COMMENT,
    payload: newComment,
  }
}

const editComment = (newComment) => {
  return {
    type: EDIT_COMMENT,
    payload: newComment,
  }
}

const deleteComment = (response) => {
  return {
    type: DELETE_COMMENT,
    payload: response,
  };
};

export const getAll = () => async (dispatch) => {
  const response = await fetch("/api/comments", {
    method: "GET",
  });
  const data = await response.json();
  const { comments } = data;
  dispatch(getComments(comments));
  return response;
};

export const createOne = ({ songId, userId, addCommentValue }) => async (dispatch) => {
  const response = await csrfFetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({
      songId,
      userId,
      addCommentValue
    }),
  });
  dispatch(addComment(response));
  return response;
};

export const editOne = ({ commentId, editCommentText }) => async (dispatch) => {
  const response = await csrfFetch('/api/comments', {
    method: 'PUT',
    body: JSON.stringify({
      commentId,
      editCommentText
    }),
  });
  dispatch(editComment(response));
  return response;
};

export const deleteOne = ({ commentId }) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
  })
  dispatch(deleteComment(response));
  return response;
}

const initialState = { allComments: null };

const commentsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = Object.assign({}, state);
      newState.allComments = action.payload;
      return newState;
    case ADD_COMMENT:
      return state;
    case DELETE_COMMENT:
      return state;
    case EDIT_COMMENT:
      return state;
    default:
      return state;
  }
};

export default commentsReducer;

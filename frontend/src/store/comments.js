import { csrfFetch } from "./csrf";

const GET_COMMENTS = 'comments/getAll';
const ADD_COMMENT = 'comments/addOne';

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
  console.log(songId, userId, addCommentValue)

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
    default:
      return state;
  }
};

export default commentsReducer;

const GET_COMMENTS = 'comments/getAll';

const getComments = (allComments) => {
  return {
    type: GET_COMMENTS,
    payload: allComments,
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

const initialState = { allComments: null };

const commentsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = Object.assign({}, state);
      newState.allComments = action.payload;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;

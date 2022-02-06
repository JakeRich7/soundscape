import { csrfFetch } from './csrf';

const GET_SONGS = 'songs/getAll';

const getSongs = (allSongs) => {
  return {
    type: GET_SONGS,
    payload: allSongs,
  };
};

export const getAll = () => async (dispatch) => {
  const response = await fetch("/api/songs", {
    method: "GET",
  });
  const data = await response.json();
  const { songs } = data;
  dispatch(getSongs(songs));
  return response;
};

export const createOne = (newSong) => async (dispatch) => {
  const { title, url, userId } = newSong;
  const response = await csrfFetch('/api/songs', {
    method: 'POST',
    body: JSON.stringify({
      title,
      url,
      userId
    }),
  });
  return;
};

const initialState = { allSongs: null };

const songsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SONGS:
      newState = Object.assign({}, state);
      newState.allSongs = action.payload;
      return newState;
    default:
      return state;
  }
};

export default songsReducer;

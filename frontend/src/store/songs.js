import { csrfFetch } from './csrf';

const GET_SONGS = 'songs/getAll';
const POST_SONG = 'songs/createOne';
const EDIT_SONG = 'songs/editOne';
const DELETE_SONG = 'songs/deleteOne';

const getSongs = (allSongs) => {
  return {
    type: GET_SONGS,
    payload: allSongs,
  };
};

const postSong = (response) => {
  return {
    type: POST_SONG,
    payload: response,
  };
};

const editSong = (response) => {
  return {
    type: EDIT_SONG,
    payload: response,
  };
};

const deleteSong = (response) => {
  return {
    type: DELETE_SONG,
    payload: response,
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
  dispatch(postSong(response));
  return response;
};

export const editOne = (alteredSong) => async (dispatch) => {
  const { title, url, songId } = alteredSong;
  const response = await csrfFetch('/api/songs', {
    method: 'PUT',
    body: JSON.stringify({
      title,
      url,
      songId
    }),
  });
  dispatch(editSong(response));
  return response;
};

export const deleteOne = ({ songId }) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/${songId}`, {
    method: 'DELETE',
  })
  dispatch(deleteSong(response));
  return response;
};

const initialState = { allSongs: null };

const songsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SONGS:
      newState = Object.assign({}, state);
      newState.allSongs = action.payload;
      return newState;
    case POST_SONG:
      return state;
    case EDIT_SONG:
      return state;
    case DELETE_SONG:
      return state;
    default:
      return state;
  }
};

export default songsReducer;

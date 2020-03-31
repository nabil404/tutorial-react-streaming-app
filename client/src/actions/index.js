import streams from "../api/streams";
import history from "../history";
import * as TYPE from "./types";

export const signIn = userId => {
  return {
    type: TYPE.SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: TYPE.SIGN_OUT
  };
};

export const createStream = formData => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formData, userId });
    dispatch({
      type: TYPE.CREATE_STREAM,
      payload: response.data
    });
    history.push("/");
  };
};

export const fetchStreams = () => {
  return async dispatch => {
    const response = await streams.get("/streams");
    dispatch({
      type: TYPE.FETCH_STREAMS,
      payload: response.data
    });
  };
};

export const fetchStream = id => {
  return async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
      type: TYPE.FETCH_STREAM,
      payload: response.data
    });
  };
};

export const editStream = (id, formData) => {
  return async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formData);
    dispatch({
      type: TYPE.EDIT_STREAM,
      payload: response.data
    });
    history.push("/");
  };
};

export const deleteStream = id => {
  return async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
      type: TYPE.DELETE_STREAM,
      payload: id
    });
  };
};

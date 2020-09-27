import server from "../apis/server";
import * as Types from "./types";
import history from "../history";
export const signIn = (userId) => {
  return {
    type: Types.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: Types.SIGN_OUT,
  };
};

// Create one Stream.
export const createStream = (formValues) => async (dispatch, getState) => {
  console.log(getState());
  const { userId } = getState().auth;
  const response = await server.post("/streams", { ...formValues, userId });
  dispatch({ type: Types.CREATE_STREAM, payload: response.data });
  history.push("/");
  // do some programnatic  navigation to
  // get the user back to the root route.
};
// fetch all streams from API
export const fetchStreams = () => async (dispatch) => {
  const response = await server.get("/streams");
  dispatch({ type: Types.FETCH_STREAMS, payload: response.data });
};

// Get one Stream from a API.
export const fetchStream = (id) => async (dispatch) => {
  const response = await server.get(`/streams/${id}`);
  dispatch({ type: Types.FETCH_STREAM, payload: response.data });
};

// edit or update Stream.
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await server.patch(`/streams/${id}`, formValues);
  dispatch({ type: Types.EDIT_STREAM, payload: response.data });
  history.push("/");
};
// Delete Stream from API
export const deleteStream = (id) => async (dispatch) => {
  await server.delete(`/streams/${id}`);
  dispatch({ type: Types.DELETE_STREAM, payload: id });
  history.push("/");
};

import {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  RESET
} from "./constants";
import API from "redux/api/users";

const loadStart = name => ({
  type: REQUEST_START,
  name
});

const receiveList = (json, name) => ({
  type: REQUEST_SUCCESS,
  payload: json,
  receivedAt: Date.now(),
  name
});

const receiveFail = (errors, name) => ({
  type: REQUEST_FAIL,
  errors,
  name
});

export function load(id, name = "") {
  return dispatch => {
    dispatch(loadStart(name));
    return API.get(id, name)
      .then(response => response.json())
      .then(json => dispatch(receiveList(json, name)))
      .catch(errors => dispatch(receiveFail(errors, name)));
  };
}

export function reset(name = "") {
  return {
    type: RESET,
    name
  };
}

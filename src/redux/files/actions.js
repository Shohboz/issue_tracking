import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL } from "./constants";
import API from "redux/api/files";

const loadStart = () => ({
  type: REQUEST_START
});

const receiveList = json => ({
  type: REQUEST_SUCCESS,
  payload: json.list,
  receivedAt: Date.now()
});

const receiveFail = errors => ({
  type: REQUEST_FAIL,
  errors
});

export function loadAll(id) {
  return dispatch => {
    dispatch(loadStart());
    return API.get(id)
      .then(response => response.json())
      .then(json => dispatch(receiveList(json)))
      .catch(errors => dispatch(receiveFail(errors)));
  };
}

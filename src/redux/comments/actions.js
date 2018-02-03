import {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  REQUEST_SAVE,
  SAVE_COMPLETE
} from "./constants";
import API from "redux/api/comments";
import { createNotification } from "redux/notifications/actions";
import { FAIL } from "redux/notifications/constants";

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

export const save = create;

export function create(data) {
  const { issueID } = data;
  return dispatch => {
    dispatch({ type: REQUEST_SAVE });
    return API.create(data)
      .then(response =>
        response.json().then(json => ({
          ok: response.ok,
          status: response.status,
          json
        }))
      )
      .then(response => {
        if (response.ok) {
          dispatch(loadAll(issueID));
        } else {
          createNotification(dispatch, {
            type: FAIL,
            text: "Создание комментария завершилось ошибкой"
          });
        }
        return dispatch({ type: SAVE_COMPLETE, payload: response.json });
      })
      .catch(errors => dispatch(receiveFail(errors)));
  };
}

import {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  RESET,
  REQUEST_UPDATE,
  UPDATE_COMPLETE,
  UPDATE_OK
} from "./constants";
import { createNotification } from "redux/notifications/actions";
import { SUCCESS, FAIL } from "redux/notifications/constants";
import API from "redux/api/account";

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

const updatePass = (dispatch, data) =>
  API.update(data).then(response => {
    if (response.ok) {
      createNotification(dispatch, {
        type: SUCCESS,
        text: `Профиль успешно обновлен`
      });
      dispatch({ type: UPDATE_OK, payload: response.json });
    } else {
      createNotification(dispatch, {
        type: FAIL,
        text: "Обновление профиля завершилось ошибкой"
      });
    }
  });

const updateFields = (dispatch, data) =>
  API.update(data)
    .then(response =>
      response.json().then(json => ({
        ok: response.ok,
        status: response.status,
        json
      }))
    )
    .then(response => {
      if (response.ok) {
        createNotification(dispatch, {
          type: SUCCESS,
          text: `Профиль успешно обновлен`
        });
        dispatch({ type: UPDATE_OK, payload: response.json });
      } else {
        createNotification(dispatch, {
          type: FAIL,
          text: "Обновление профиля завершилось ошибкой"
        });
      }
      return dispatch({ type: UPDATE_COMPLETE, payload: response.json });
    })
    .catch(errors => dispatch(receiveFail(errors)));

export function update(data) {
  return dispatch => {
    dispatch({ type: REQUEST_UPDATE });
    return data.pass
      ? updatePass(dispatch, data)
      : updateFields(dispatch, data);
  };
}

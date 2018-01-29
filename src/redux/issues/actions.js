import {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  REQUEST_SAVE,
  REQUEST_UPDATE,
  SAVE_COMPLETE,
  UPDATE_COMPLETE,
  UPDATE_OK,
  SAVE_OK
} from "./constants";
import API from "redux/api/issues";
import { createNotification } from "redux/notifications/actions";
import { SUCCESS, FAIL } from "redux/notifications/constants";
import { history } from "redux/configureStore";

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

export function loadAll() {
  return dispatch => {
    dispatch(loadStart());
    return API.get()
      .then(response => response.json())
      .then(json => dispatch(receiveList(json)))
      .catch(errors => dispatch(receiveFail(errors)));
  };
}

export function save(data) {
  return data.id ? update(data) : create(data);
}

export function create(data) {
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
          response.json &&
            response.json.id &&
            history.push(`/issues/${response.json.id}`);
          createNotification(dispatch, {
            type: SUCCESS,
            text: `Вопрос #${response.json.id} успешно создан`
          });
          dispatch({ type: SAVE_OK, payload: response.json });
        } else {
          createNotification(dispatch, {
            type: FAIL,
            text: "Создание вопроса завершилось ошибкой"
          });
        }
        return dispatch({ type: SAVE_COMPLETE, payload: response.json });
      })
      .catch(errors => dispatch(receiveFail(errors)));
  };
}

export function update(data) {
  return dispatch => {
    dispatch({ type: REQUEST_UPDATE });
    return API.update(data)
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
            text: `Вопрос #${response.json.id} успешно обновлен`
          });
          dispatch({ type: UPDATE_OK, payload: response.json });
        } else {
          createNotification(dispatch, {
            type: FAIL,
            text: "Обновление вопроса завершилось ошибкой"
          });
        }
        return dispatch({ type: UPDATE_COMPLETE, payload: response.json });
      })
      .catch(errors => dispatch(receiveFail(errors)));
  };
}

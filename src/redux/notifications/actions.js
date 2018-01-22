import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from "./constants";

let counter = 0;

export function addNotification(message, id) {
  return {
    id,
    type: ADD_NOTIFICATION,
    message
  };
}

export function deleteNotification(id) {
  return {
    type: DELETE_NOTIFICATION,
    id
  };
}

export function createNotification(dispatch, message, duration = 5e3) {
  let id = counter++;
  dispatch(addNotification(message, id));
  setTimeout(() => {
    dispatch(deleteNotification(id));
  }, duration);
}

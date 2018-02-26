import { combineReducers } from "redux";
import {
  REQUEST_FAIL,
  REQUEST_SUCCESS,
  REQUEST_START,
  RESET,
  UPDATE_FORM
} from "./constants";
import comments from "redux/comments/reducers";
import files from "redux/files/reducers";

const initialState = {
  isFetching: false,
  data: null,
  errors: "",
  form: null
};

export function main(state = initialState, action) {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        isFetching: true
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        lastUpdated: action.receivedAt,
        errors: ""
      };

    case REQUEST_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      };

    case RESET:
      return initialState;

    case UPDATE_FORM:
      return {
        ...state,
        form: action.payload
      };

    default:
      return state;
  }
}

export default combineReducers({
  main,
  comments,
  files
});

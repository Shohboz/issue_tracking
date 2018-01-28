import { combineReducers } from "redux";
import {
  REQUEST_FAIL,
  REQUEST_SUCCESS,
  REQUEST_START,
  RESET
} from "./constants";

const initialState = {
  isFetching: false,
  data: null,
  errors: ""
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

    default:
      return state;
  }
}

export default combineReducers({
  main
});

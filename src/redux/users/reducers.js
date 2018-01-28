import { combineReducers } from "redux";
import {
  REQUEST_FAIL,
  REQUEST_SUCCESS,
  REQUEST_START,
  SAVE_COMPLETE,
  UPDATE_COMPLETE,
  UPDATE_OK,
  SAVE_OK
} from "./constants";
import current from "redux/user/reducers";

const initialState = {
  isFetching: false,
  list: [],
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
        list: action.payload,
        lastUpdated: action.receivedAt,
        errors: ""
      };

    case REQUEST_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      };

    case UPDATE_OK:
      return {
        ...state,
        isFetching: false,
        list: state.list.map(
          item =>
            item.id === action.payload.id
              ? {
                  ...item,
                  ...action.payload
                }
              : item
        )
      };

    case SAVE_OK:
      return {
        ...state,
        isFetching: false,
        list: state.list.concat(action.payload)
      };

    case SAVE_COMPLETE:
      return {
        ...state,
        isFetching: false
      };

    case UPDATE_COMPLETE:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
}

export default combineReducers({
  main,
  current
});

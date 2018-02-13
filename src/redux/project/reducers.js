import { combineReducers } from "redux";
import {
  REQUEST_FAIL,
  REQUEST_SUCCESS,
  REQUEST_START,
  CHANGE_CURRENT_PROJECT
} from "./constants";
import wrapperReducer from "redux/containers/wrapperReducer";

const initialState = {
  isFetching: false,
  list: [],
  errors: "",
  departmentId: null
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

    case CHANGE_CURRENT_PROJECT:
      return {
        ...state,
        departmentId: action.payload
      };

    default:
      return state;
  }
}

export default combineReducers({
  main,
  issues: wrapperReducer(main, "issues"),
  departments: wrapperReducer(main, "departments")
});

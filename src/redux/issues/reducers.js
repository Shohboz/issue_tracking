import { combineReducers } from "redux";
import { REQUEST_FAIL, REQUEST_SUCCESS, REQUEST_START } from "./constants";
import current from "redux/issue/reducers";

const initialState = {
  isFetching: false,
  list: [],
  errors: "",
  total: null
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
        total: action.total,
        lastUpdated: action.receivedAt,
        errors: ""
      };

    case REQUEST_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      };

    default:
      return state;
  }
}

export default combineReducers({
  main,
  current
});

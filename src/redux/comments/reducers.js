import {
  REQUEST_FAIL,
  REQUEST_SUCCESS,
  REQUEST_START,
  SAVE_COMPLETE,
  SAVE_OK
} from "./constants";

const initialState = {
  isFetching: false,
  list: [],
  errors: ""
};

export default (state = initialState, action) => {
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

    default:
      return state;
  }
};

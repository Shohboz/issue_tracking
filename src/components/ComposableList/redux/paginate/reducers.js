import { CHANGE } from "./constants";
import { CHANGE as RESET } from "../search/constants";

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE:
      const { payload: { uniqueKey, value } } = action;
      return {
        ...state,
        [uniqueKey]: value
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

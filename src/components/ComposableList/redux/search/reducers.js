import { CHANGE } from "./constants";

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE:
      const { payload: { uniqueKey, searchBy, value } } = action;
      return {
        ...state,
        [uniqueKey]: { text: value, searchBy }
      };

    default:
      return state;
  }
};

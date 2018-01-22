import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from "./constants";

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      const { message: { type, text } } = action;
      return [
        ...state,
        {
          id: action.id,
          type,
          text
        }
      ];

    case DELETE_NOTIFICATION:
      return state.filter(message => message.id !== action.id);

    default:
      return state;
  }
};

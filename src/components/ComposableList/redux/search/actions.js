import { CHANGE } from "./constants";

export function search(uniqueKey, searchBy, value) {
  return {
    type: CHANGE,
    payload: {
      uniqueKey,
      searchBy,
      value
    }
  };
}

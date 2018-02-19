import { CHANGE } from "./constants";

export function doTableSort(uniqueKey, sortKey, sortFn) {
  return {
    type: CHANGE,
    payload: {
      uniqueKey,
      sortKey,
      sortFn
    }
  };
}

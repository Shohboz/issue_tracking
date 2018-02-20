import { CHANGE } from "./constants";
import { partition, isNotEmpty } from "./helpers";
import sortBy from "lodash/sortBy";

const initialState = {};

function getEnhancedSortFn(isReverse, sortFn) {
  return function(items) {
    const [filledValues, emptyValues] = partition(items, item =>
      isNotEmpty(sortFn(item))
    );

    return isReverse
      ? sortBy(filledValues, sortFn).reverse().concat(emptyValues)
      : sortBy(filledValues, sortFn).concat(emptyValues);
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      const { payload: { uniqueKey, sortKey, sortFn } } = action;
      const isReverse =
        !!state[uniqueKey] &&
        state[uniqueKey].sortKey === sortKey &&
        !state[uniqueKey].isReverse;
      const enhancedSortFn = getEnhancedSortFn(isReverse, sortFn);
      return {
        ...state,
        [uniqueKey]: { sortFn: enhancedSortFn, sortKey, isReverse }
      };
    default:
      return state;
  }
};

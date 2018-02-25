import { CHANGE } from "./constants";
import { partition, isNotEmpty } from "./helpers";
import { sortBy, reverse, concat, compose, curry } from "ramda";

const initialState = {};

const reversed = curry((cond, s) => (cond ? reverse(s) : s));

function getEnhancedSortFn(isReverse, sortFn) {
  return items => {
    const [filledValues, emptyValues] = partition(items, item =>
      isNotEmpty(sortFn(item))
    );

    return compose(concat(emptyValues), reversed(isReverse), sortBy(sortFn))(
      filledValues
    );
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

import { CHANGE } from "./constants";

function gotoPage(uniqueKey, value) {
  return {
    type: CHANGE,
    payload: {
      uniqueKey,
      value
    }
  };
}

export { gotoPage, gotoPage as default };

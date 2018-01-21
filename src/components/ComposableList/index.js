import { combineReducers } from "redux";
import * as enhancements from "./enhancements";
import * as components from "./components";
import paginate from "./redux/paginate/reducers";
import search from "./redux/search/reducers";
import paginateAction from "./redux/paginate/actions";

const reducers = combineReducers({
  paginate,
  search
});

const actions = {
  paginate: paginateAction
};

export { enhancements, components, reducers, reducers as default, actions };

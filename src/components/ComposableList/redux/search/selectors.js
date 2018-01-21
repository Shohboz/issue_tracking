import { createSelector } from "reselect";
import { getSearchList } from "./helpers";

const listSelector = state => state.items;
const searchTextSelector = state => state.search;

export const searchSelector = createSelector(
  [listSelector, searchTextSelector],
  getSearchList
);


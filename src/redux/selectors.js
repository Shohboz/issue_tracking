import { createSelector } from "reselect";
import {
  prop,
  compose,
  reduce,
  curry,
  concat,
  identity,
  descend,
  sort,
  map,
  equals
} from "ramda";
import { Maybe } from "ramda-fantasy";
import { toRenderList, toRenderObject } from "./helpers";

const listSelector = compose(prop("list"), prop("main"));
const usersSelector = compose(listSelector, prop("users"));
const issuesSelector = compose(listSelector, prop("issues"));
const projectsSelector = compose(listSelector, prop("projects"));
const departmentsSelector = compose(listSelector, prop("departments"));
const accountSelector = compose(prop("data"), prop("main"), prop("account"));

const assignee_id = prop("assignee_id");
const reporter_id = prop("reporter_id");

const safeProp = x =>
  compose(Maybe.maybe(x, identity), Maybe.toMaybe, prop("name"), prop(x));

const addName = curry((list, acc, x) =>
  concat(acc, [
    {
      ...x,
      assignee_id: safeProp(assignee_id(x))(list),
      reporter_id: safeProp(reporter_id(x))(list)
    }
  ])
);

const toRenderListObject = toRenderObject("id");

const addNames = compose(addName, curry(toRenderListObject));

const byDescendCreated = descend(prop("created"));

const sortedIssues = compose(sort(byDescendCreated), issuesSelector);

export const withNames = createSelector(
  [usersSelector, sortedIssues],
  (users, issues) => reduce(addNames(users), [])(issues)
);

export const toRenderListUsers = createSelector(usersSelector, toRenderList);
export const toRenderListProjects = createSelector(
  projectsSelector,
  toRenderList
);
export const toRenderListDepartments = createSelector(
  departmentsSelector,
  toRenderList
);

export const toObjectUsers = createSelector(usersSelector, toRenderListObject);
export const toObjectProjects = createSelector(
  projectsSelector,
  toRenderListObject
);
export const toObjectDepartments = createSelector(
  departmentsSelector,
  toRenderListObject
);

export const isAdmin = createSelector(
  accountSelector,
  compose(Maybe.maybe(false, equals("admin")), map(prop("role")), Maybe.toMaybe)
);

import { combineReducers } from "redux";
import projects from "redux/projects/reducers";
import users from "redux/users/reducers";
import departments from "redux/departments/reducers";
import presets from "redux/presets/reducers";
import issues from "redux/issues/reducers";
import composableList from "components/ComposableList";
import { reducer as form } from "redux-form";
import notifications from "redux/notifications/reducers";

export default combineReducers({
  projects,
  presets,
  issues,
  users,
  departments,
  composableList,
  form,
  notifications
});

import { combineReducers } from "redux";
import projects from "redux/projects/reducers";
import departments from "redux/departments/reducers";
import presets from "redux/presets/reducers";
import issues from "redux/issues/reducers";
import composableList from "components/ComposableList";

export default combineReducers({
  projects,
  presets,
  issues,
  departments,
  composableList
});

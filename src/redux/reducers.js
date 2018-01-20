import { combineReducers } from "redux";
import projects from "redux/projects/reducers";
import presets from "redux/presets/reducers";
import issues from "redux/issues/reducers";

export default combineReducers({
  projects,
  presets,
  issues
});

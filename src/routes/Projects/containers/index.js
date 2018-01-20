import { loadAll as load } from "redux/projects/actions";
import { withLoader } from "components/HOC";
import Projects from "../components";

const mapStateToProps = ({
  projects: { main: { isFetching, errors, list } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(Projects)({
  action: load,
  mapStateToProps,
  prop: "projectID"
});

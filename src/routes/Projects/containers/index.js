import { loadAll as load } from "redux/projects/actions";
import { Grid } from "react-bootstrap";
import { withLoader } from "components/HOC";
import Projects from "../components";

const mapStateToProps = ({
  projects: { main: { isFetching, errors, list } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(Projects)(Grid)({
  action: load,
  mapStateToProps,
  prop: "projectID"
});

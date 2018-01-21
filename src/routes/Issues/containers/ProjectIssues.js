import { load } from "redux/project/actions";
import { withLoader } from "components/HOC";
import Issues from "../components";

const mapStateToProps = ({
  projects: { current: { issues: { isFetching, errors, list } } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(Issues)()({
  action: load,
  name: "issues",
  mapStateToProps,
  prop: "projectID"
});

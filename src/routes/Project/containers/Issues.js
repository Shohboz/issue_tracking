import { load } from "redux/project/actions";
import { withLoader } from "components/HOC";
import List from "routes/Issues/components";

const mapStateToProps = ({
  projects: { current: { issues: { isFetching, errors, list } } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(List)()({
  action: load,
  name: "issues",
  mapStateToProps,
  prop: "projectID"
});

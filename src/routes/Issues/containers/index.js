import { loadAll as load } from "redux/issues/actions";
import { withLoader } from "components/HOC";
import Issues from "../components";

const mapStateToProps = ({
  issues: { main: { isFetching, errors, list } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(Issues)({
  action: load,
  mapStateToProps,
  prop: "issueID"
});

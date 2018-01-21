import { loadAll as load } from "redux/issues/actions";
import { Grid } from "react-bootstrap";
import { withLoader } from "components/HOC";
import List from "../components";

const mapStateToProps = ({
  issues: { main: { isFetching, errors, list } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(List)(Grid)({
  action: load,
  mapStateToProps,
  prop: "issueID"
});

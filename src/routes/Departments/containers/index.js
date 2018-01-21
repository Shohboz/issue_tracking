import { loadAll as load } from "redux/departments/actions";
import { Grid } from "react-bootstrap";
import { withLoader } from "components/HOC";
import withPanel from "components/List";
import Items from "../components";

const List = withPanel(Items)({ title: "Список департаментов" });

const mapStateToProps = ({
  departments: { main: { isFetching, errors, list } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(List)(Grid)({
  action: load,
  mapStateToProps,
  prop: "departmentID"
});

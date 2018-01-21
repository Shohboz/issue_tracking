import { load } from "redux/project/actions";
import { withLoader } from "components/HOC";
import withPanel from "components/List";
import Items from "routes/Departments/components";

const List = withPanel(Items)({ title: "Список департаментов" });

const mapStateToProps = ({
  projects: { current: { departments: { isFetching, errors, list } } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(List)()({
  action: load,
  name: "departments",
  mapStateToProps,
  prop: "projectID"
});

import React from "react";
import { load } from "redux/project/actions";
import { withLoader } from "components/HOC";
import Items from "routes/Departments/components";
import { compose } from "recompose";
import { enhancements } from "components/ComposableList";
import { Footer } from "components/Panel";
import PanelHeader from "routes/Departments/components/PanelHeader";
import withPanel from "components/List";

const { withPaginate, withFilter } = enhancements;

const List = compose(withFilter(), withPaginate({ size: 10 })(Footer))(Items);

const PaginatedList = ({ items }) => [
  <PanelHeader key="header" />,
  <List items={items} uniqueKey={"departments"} key="list" />
];

const mapStateToProps = ({
  projects: { current: { departments: { isFetching, errors, list } } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(
  withPanel(PaginatedList)({ title: "Список департаментов" })
)()({
  action: load,
  name: "departments",
  mapStateToProps,
  prop: "projectID"
});

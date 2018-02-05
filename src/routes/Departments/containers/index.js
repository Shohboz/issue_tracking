import React from "react";
import { loadAll as load } from "redux/departments/actions";
import { Grid } from "react-bootstrap";
import { compose } from "recompose";
import { enhancements } from "components/ComposableList";
import { Footer } from "components/Panel";
import { Search as PanelHeader } from "components/Panel";
import withPanel from "components/List";
import { withLoader } from "components/HOC";
import Items from "../components";

const { withPaginate, withFilter } = enhancements;

const List = compose(withFilter(), withPaginate({ size: 15 })(Footer))(Items);

const PaginatedList = ({ items }) => [
  <PanelHeader
    key="header"
    searchBy={["name"]}
    uniqueKey="departments"
    placeholder={"Поиск по названию отдела"}
    title={"Добавить отдел"}
    link={"/departments/new"}
  />,
  <List items={items} uniqueKey={"departments"} key="list" />
];

const mapStateToProps = ({
  departments: { main: { isFetching, errors, list } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(
  withPanel(PaginatedList)({ title: "Список отделов" })
)(Grid)({
  action: load,
  mapStateToProps,
  prop: "departmentID"
});

import React from "react";
import { loadAll as load } from "redux/archived/actions";
import { Grid } from "react-bootstrap";
import { compose } from "recompose";
import { enhancements } from "components/ComposableList";
import { Footer } from "components/Panel";
import { Search as PanelHeader } from "components/Panel";
import withPanel from "components/List";
import { withLoader } from "components/HOC";
import Items from "../components";
// import { archivedProjects } from "redux/selectors";

const { withPaginate, withFilter, withSort } = enhancements;

const List = compose(
  withSort(),
  withFilter(),
  withPaginate({ size: 15 })(Footer)
)(Items);

const PaginatedList = ({ items }) => [
  <PanelHeader
    key="header"
    searchBy={["name"]}
    uniqueKey="archived_projects"
    placeholder={"Поиск по названию проекта"}
    title={"Добавить проект"}
    link={"/projects/new"}
  />,
  <List items={items} uniqueKey={"archived_projects"} key="list" />
];

const mapStateToProps = state => {
  const { archived: { main: { isFetching, errors, list } } } = state;
  return {
    errors,
    list,
    isFetching
  };
};

export default withLoader(
  withPanel(PaginatedList)({ title: "Список проектов" })
)(Grid)({
  action: load,
  mapStateToProps,
  prop: "projectID"
});

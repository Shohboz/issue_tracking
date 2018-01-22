import React from "react";
import { load } from "redux/project/actions";
import { withLoader } from "components/HOC";
import Items from "routes/Departments/components";
import { compose } from "recompose";
import { enhancements } from "components/ComposableList";
import { Footer } from "components/Panel";
import withPanel from "components/List";
import { Search as PanelHeader } from "components/Panel";

const { withPaginate, withFilter } = enhancements;

const List = compose(withFilter(), withPaginate({ size: 10 })(Footer))(Items);

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
  projects: { current: { departments: { isFetching, errors, list } } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(
  withPanel(PaginatedList)({ title: "Список отделов проекта" })
)()({
  action: load,
  name: "departments",
  mapStateToProps,
  prop: "projectID"
});

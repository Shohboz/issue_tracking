import React from "react";
import { load } from "redux/department/actions";
import { withLoader } from "components/HOC";
import Items from "routes/Projects/components";
import { compose } from "recompose";
import { enhancements } from "components/ComposableList";
import { Footer } from "components/Panel";
import withPanel from "components/List";
import { Search as PanelHeader } from "components/Panel";

const { withPaginate, withFilter, withSort } = enhancements;

const List = compose(
  withSort(),
  withFilter(),
  withPaginate({ size: 10 })(Footer)
)(Items);

const PaginatedList = ({ items }) => [
  <PanelHeader
    key="header"
    searchBy={["name"]}
    uniqueKey="departments-projects"
    placeholder={"Поиск по названию проекта"}
    title={"Добавить проект"}
    link={"/projects/new"}
  />,
  <List
    items={items}
    secondary={true}
    uniqueKey={"departments-projects"}
    key="list"
  />
];

const mapStateToProps = ({
  departments: { current: { projects: { isFetching, errors, list } } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(
  withPanel(PaginatedList)({ title: "Список проектов отдела" })
)()({
  action: load,
  name: "projects",
  mapStateToProps,
  prop: "departmentID"
});

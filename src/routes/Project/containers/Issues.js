import React from "react";
import { load } from "redux/project/actions";
import { withLoader } from "components/HOC";
import Items from "routes/Issues/components";
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
    uniqueKey="issues"
    placeholder={"Поиск по названию"}
    title={"Добавить вопрос"}
    link={"/issues/new"}
  />,
  <List items={items} secondary={true} uniqueKey={"issues"} key="list" />
];

const mapStateToProps = ({
  projects: { current: { issues: { isFetching, errors, list } } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(
  withPanel(PaginatedList)({ title: "Список вопросов проекта" })
)()({
  action: load,
  name: "issues",
  mapStateToProps,
  prop: "projectID"
});

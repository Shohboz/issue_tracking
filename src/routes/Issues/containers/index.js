import React from "react";
import { loadAll as load } from "redux/issues/actions";
import { Grid } from "react-bootstrap";
import { compose } from "recompose";
import { enhancements } from "components/ComposableList";
import { Footer } from "components/Panel";
import { Search as PanelHeader } from "components/Panel";
import withPanel from "components/List";
import { withLoader } from "components/HOC";
import Items from "../components";

const { withPaginate, withFilter } = enhancements;

const List = compose(withFilter(), withPaginate({ size: 10 })(Footer))(Items);

const PaginatedList = ({ items }) => [
  <PanelHeader
    key="header"
    searchBy={["name"]}
    uniqueKey="issues"
    placeholder={"Поиск по названию вопроса"}
    title={"Добавить вопрос"}
    link={"/issues/new"}
  />,
  <List items={items} uniqueKey={"issues"} key="issues" />
];

const mapStateToProps = ({
  issues: { main: { isFetching, errors, list } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(
  withPanel(PaginatedList)({ title: "Список вопросов" })
)(Grid)({
  action: load,
  mapStateToProps,
  prop: "issueID"
});

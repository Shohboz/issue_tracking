import React from "react";
import { loadAll as load } from "redux/users/actions";
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
    searchBy={["name", "login", "email"]}
    uniqueKey="users"
    placeholder={"Поиск по имени пользователя/логину/почте"}
    title={"Добавить пользователя"}
    link={"/users/new"}
  />,
  <List items={items} uniqueKey={"users"} key="list" />
];

const mapStateToProps = ({
  users: { main: { isFetching, errors, list } }
}) => ({
  errors,
  list,
  isFetching
});

export default withLoader(
  withPanel(PaginatedList)({ title: "Список пользователей" })
)(Grid)({
  action: load,
  mapStateToProps,
  prop: "userID"
});

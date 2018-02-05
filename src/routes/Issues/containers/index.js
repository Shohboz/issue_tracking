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
import { withNames } from "redux/selectors";
import { Link } from "react-router-dom";

const { withPaginate, withFilter } = enhancements;

const List = compose(withFilter(), withPaginate({ size: 15 })(Footer))(Items);

const AdvancedSearch = () => (
  <div className="col-sm-5">
    <Link to={`/issues/search`}>
      <button className="btn btn-default" title={"Расширенный поиск"}>
        <i className="glyphicon glyphicon-search" />
      </button>
    </Link>
  </div>
);

const PaginatedList = ({ items }) => [
  <PanelHeader
    key="header"
    searchBy={["name", "title"]}
    uniqueKey="issues"
    placeholder={"Поиск по названию вопроса"}
    title={"Добавить вопрос"}
    link={"/issues/new"}
    SearchExtension={AdvancedSearch}
  />,
  <List items={items} uniqueKey={"issues"} key="issues" />
];

const mapStateToProps = state => {
  const { issues: { main: { isFetching, errors } } } = state;
  return {
    errors,
    list: withNames(state),
    isFetching
  };
};

export default withLoader(
  withPanel(PaginatedList)({ title: "Список вопросов" })
)(Grid)({
  action: load,
  mapStateToProps,
  prop: "issueID"
});

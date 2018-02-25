import React, { Fragment } from "react";
import { loadAll as load } from "redux/issues/actions";
import { Grid } from "react-bootstrap";
import { compose } from "recompose";
import { enhancements } from "components/ComposableList";
import { Footer } from "components/Panel";
import withPanel from "components/List";
import { withSpecialLoader as withLoader } from "components/HOC";
import Items from "../components";
import { withNames } from "redux/selectors";
import PanelHeader from "./SearchForm";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";

const { withPaginate, withSort } = enhancements;

const List = compose(withSort(), withPaginate({ size: 15 })(Footer))(Items);

const PaginatedList = ({ items, isFetching, errors }) => (
  <Fragment>
    <PanelHeader uniqueKey={"issues"} />
    {isFetching && <Preloader minHeight="200px" />}
    {!isFetching && !errors && <List items={items} uniqueKey={"issues"} />}
    {errors && <ErrorPage errors={errors} />}
  </Fragment>
);

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

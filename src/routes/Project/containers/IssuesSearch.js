import React from "react";
import { compose } from "recompose";
import { enhancements } from "components/ComposableList";
import { Footer } from "components/Panel";
import withPanel from "components/List";
import { withSpecialLoader as withLoader } from "components/HOC";
import Items from "routes/Issues/components";
import { withNames } from "redux/selectors";
import PanelHeader from "routes/Issues/containers/SearchForm";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import { search } from "redux/issues/actions";

const { withPaginate } = enhancements;

const List = compose(withPaginate({ size: 15 })(Footer))(Items);

const PaginatedList = ({ items, isFetching, errors, match }) => [
  <PanelHeader
    uniqueKey={"issues"}
    key="header"
    secondary={true}
    match={match}
  />,
  <div key="issues">
    {isFetching && <Preloader minHeight="200px" />}
    {!isFetching &&
      !errors && <List items={items} uniqueKey={"issues"} secondary={true} />}
    {errors && <ErrorPage errors={errors} />}
  </div>
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
  withPanel(PaginatedList)({ title: "Список вопросов проекта" })
)()({
  name: "issues",
  action: search,
  mapStateToProps,
  isDirectParams: true,
  prop: "projectID",
  internal_name: "project_id"
});

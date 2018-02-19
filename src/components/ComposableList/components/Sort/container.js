import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getContext } from "../../redux/sort/helpers";
import { doTableSort } from "../../redux/sort/actions";
import Sort from "./Sort";

function getSort(state, uniqueKey) {
  return state["composableList"]["sort"][uniqueKey] || {};
}

function mapStateToProps(state, { sortKey, uniqueKey }) {
  const { sortKey: stateSortKey, isReverse: stateIsReverse } = getSort(
    state,
    uniqueKey
  );
  const isActive = stateSortKey === sortKey;
  const isReverse = stateIsReverse && isActive;

  return {
    isActive,
    isReverse
  };
}

function mapDispatchToProps(dispatch, { sortKey, sortFn, uniqueKey }) {
  return {
    onSort: bindActionCreators(
      () => doTableSort(uniqueKey, sortKey, sortFn),
      dispatch
    )
  };
}

const contextTypes = {
  uniqueKey: PropTypes.string.isRequired
};

export default getContext(contextTypes)(
  connect(mapStateToProps, mapDispatchToProps)(Sort)
);

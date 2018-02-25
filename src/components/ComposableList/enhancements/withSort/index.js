import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isEmpty } from "ramda";
import { doTableSort } from "../../redux/sort/actions";

const sortList = fn => list => (fn ? fn(list) : list);

const initialConfig = {};

export default (configuration = {}) => Enhanced => {
  class WithSort extends Component {
    componentDidMount() {
      const { sort, onTableSort } = this.props;
      if (configuration.sortKey && configuration.sortFn && isEmpty(sort)) {
        onTableSort(configuration.sortKey, configuration.sortFn);
      }
    }

    render() {
      const { sort, onTableSort, ...props } = this.props;
      return <Enhanced {...props} />;
    }
  }

  const mapStateToProps = (state, { items, uniqueKey }) => {
    const { composableList: { sort: sortable } } = state;

    const sort = {
      ...initialConfig,
      ...configuration,
      ...sortable[uniqueKey]
    };
    return {
      items: sortList(sort.sortFn)(items),
      sort
    };
  };

  const mapDispatchToProps = (dispatch, { uniqueKey }) => ({
    onTableSort: bindActionCreators(
      (sortKey, sortFn) => doTableSort(uniqueKey, sortKey, sortFn),
      dispatch
    )
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithSort);
};

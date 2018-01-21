import React from "react";
import { connect } from "react-redux";
import { searchSelector } from "../../redux/search/selectors";

const initialConfig = {
  searchBy: ["title"],
  text: ""
};

export default (configure = {}) => WrappedComponent => {
  const WithFilter = props => <WrappedComponent {...props} />;

  const mapStateToProps = (state, { items, uniqueKey }) => {
    const { composableList: { search: searchState } } = state;
    const search = {
      ...initialConfig,
      ...configure,
      ...searchState[uniqueKey]
    };
    return {
      items: searchSelector({
        items,
        search
      }),
      uniqueKey
    };
  };

  return connect(mapStateToProps)(WithFilter);
};

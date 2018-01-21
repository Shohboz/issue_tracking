import React from "react";
import { connect } from "react-redux";
import Pagination from "../../components/Pagination";
import {
  pageableSelector,
  countSelector,
  pagesSelector
} from "../../redux/paginate/selectors";

const initialConfig = {
  current: 0,
  size: 15,
  paginate: 5,
  server: false
};

export default (configure = {}) => PaginatorWrapper => WrappedComponent => {
  const WithPaginate = props => [
    <WrappedComponent key="wrapped" {...props} />,
    <PaginatorWrapper key="paginator">
      <Pagination
        items={props.paginatedItems}
        current={props.current}
        count={props.count}
        uniqueKey={props.uniqueKey}
      />
    </PaginatorWrapper>
  ];

  const mapStateToProps = (state, { items, uniqueKey }) => {
    const { composableList: { paginate } } = state;
    const pagination = {
      ...initialConfig,
      ...configure,
      ...paginate[uniqueKey]
    };
    return {
      items: pageableSelector({
        pagination,
        items
      }),
      paginatedItems: pagesSelector({ items, pagination }),
      uniqueKey,
      current: pagination.current,
      count: countSelector({ items, pagination })
    };
  };

  return connect(mapStateToProps)(WithPaginate);
};

import React, { Fragment } from "react";
import { connect } from "react-redux";
import Pagination from "../../components/Pagination";
import {
  pageableSelector,
  countSelector,
  pagesSelector
} from "../../redux/paginate/selectors";
import { getPageCount, getPageList } from "../../redux/paginate/helpers";

const initialConfig = {
  current: 0,
  size: 15,
  paginate: 5,
  server: false
};

export default (configure = {}) => PaginatorWrapper => WrappedComponent => {
  const WithPaginate = props => (
    <Fragment>
      <WrappedComponent {...props} />
      <PaginatorWrapper>
        <Pagination
          form={props.form}
          items={props.paginatedItems}
          current={props.current}
          count={props.count}
          uniqueKey={props.uniqueKey}
          action={props.action}
        />
      </PaginatorWrapper>
    </Fragment>
  );
  const mapStateToProps = (state, { items, uniqueKey, total, form }) => {
    const { composableList: { paginate } } = state;
    const pagination = {
      ...initialConfig,
      ...configure,
      ...paginate[uniqueKey]
    };

    const pageCount = total && getPageCount(total, pagination.size);

    return {
      items: pageableSelector({
        pagination,
        items
      }),
      form,
      paginatedItems: pagination.server
        ? getPageList(pageCount, pagination)
        : pagesSelector({ items, pagination }),
      uniqueKey,
      current: pagination.current,
      count: pagination.server
        ? pageCount
        : countSelector({ items, pagination })
    };
  };

  const mapDispatchToProps = {
    action: configure.action
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithPaginate);
};

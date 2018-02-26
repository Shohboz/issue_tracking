import React, { Component } from "react";
import Paginator from "./Paginator";

const NoItems = () => <div />;

export default class Pagination extends Component {
  onPageChange = value => {
    const { uniqueKey, gotoPage, action, form } = this.props;
    gotoPage(uniqueKey, { current: value });
    action && action({ ...form, limit: 15, offset: +value * 15 });
  };

  render() {
    const { items, current, count } = this.props;
    return items.length < 2
      ? <NoItems />
      : <Paginator
          items={items}
          onPageChange={this.onPageChange}
          current={current}
          pageCount={count}
        />;
  }
}

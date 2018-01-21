import React, { Component } from "react";
import Paginator from "./Paginator";

const NoItems = () => <div />;

export default class Pagination extends Component {
  onPageChange = value => {
    const { uniqueKey, gotoPage } = this.props;
    gotoPage(uniqueKey, { current: value });
  };

  render() {
    const { items, current, count } = this.props;
    return items.length < 2 ? (
      <NoItems />
    ) : (
      <Paginator
        items={items}
        onPageChange={this.onPageChange}
        current={current}
        pageCount={count}
      />
    );
  }
}

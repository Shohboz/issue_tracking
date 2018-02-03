import React, { Component } from "react";
import { connect } from "react-redux";
import Comments from "../components/List";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import { loadAll as load } from "redux/comments/actions";

class List extends Component {
  componentDidMount() {
    const { load, match: { params: { issueID: id } } } = this.props;
    load(id);
  }

  render() {
    const { isFetching, errors, list, optionsUsers } = this.props;
    return (
      <div>
        {isFetching && <Preloader minHeight="100px" />}
        {!isFetching &&
          !errors && <Comments items={list} optionsUsers={optionsUsers} />}
        {errors && <ErrorPage errors={errors} />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { issues: { current: { comments } } } = state;
  return {
    ...ownProps,
    ...comments
  };
};

export default connect(mapStateToProps, { load })(List);

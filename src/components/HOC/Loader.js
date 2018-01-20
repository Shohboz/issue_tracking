import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";

export default WrappedComponent => ({ action, prop, mapStateToProps }) => {
  class Loader extends Component {
    componentDidMount() {
      const { action, match: { params } } = this.props;
      action(params[prop]);
    }

    render() {
      const { errors, list, isFetching } = this.props;
      return (
        <Grid>
          {isFetching && <Preloader />}
          {!isFetching && !errors && <WrappedComponent items={list} />}
          {errors && <ErrorPage errors={errors} />}
        </Grid>
      );
    }
  }

  return connect(mapStateToProps, { action })(Loader);
};

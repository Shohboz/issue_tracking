import React, { Component } from "react";
import { connect } from "react-redux";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";

export default WrappedComponent => (Wrapper = "div") => ({
  action,
  prop,
  mapStateToProps,
  name
}) => {
  class Loader extends Component {
    componentDidMount() {
      const { action, match: { params } } = this.props;
      action(params[prop], name);
    }

    componentDidUpdate(prevProps) {
      const { action, match: { params } } = this.props;
      const { match: { params: prevParams } } = prevProps;
      if (prevParams[prop] !== params[prop]) {
        action(params[prop], name);
      }
    }

    render() {
      const { errors, list, isFetching } = this.props;
      return (
        <Wrapper>
          {isFetching && <Preloader />}
          {!isFetching &&
            !errors && <WrappedComponent {...this.props} items={list} />}
          {errors && <ErrorPage errors={errors} />}
        </Wrapper>
      );
    }
  }

  return connect(mapStateToProps, { action })(Loader);
};

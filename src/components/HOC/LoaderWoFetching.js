import React, { Component } from "react";
import { connect } from "react-redux";

export default WrappedComponent => (Wrapper = "div") => ({
  action,
  prop,
  mapStateToProps,
  name,
  isDirectParams,
  internal_name,
  onMountAction
}) => {
  class Loader extends Component {
    componentDidMount() {
      const { action, onMountAction, match: { params } } = this.props;
      const _action = onMountAction || action;

      isDirectParams
        ? _action({ [internal_name]: params[prop] }, name)
        : _action(params[prop], name);
    }

    componentDidUpdate(prevProps) {
      const { action, match: { params } } = this.props;
      const { match: { params: prevParams } } = prevProps;
      if (prevParams[prop] !== params[prop]) {
        isDirectParams
          ? action({ [internal_name]: params[prop] }, name)
          : action(params[prop], name);
      }
    }

    render() {
      const { list } = this.props;
      return (
        <Wrapper>
          <WrappedComponent {...this.props} items={list} />
        </Wrapper>
      );
    }
  }

  return connect(mapStateToProps, { action, onMountAction })(Loader);
};

import React, { Component } from "react";
import { connect } from "react-redux";

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
      const { list } = this.props;
      return (
        <Wrapper>
          <WrappedComponent {...this.props} items={list} />
        </Wrapper>
      );
    }
  }

  return connect(mapStateToProps, { action })(Loader);
};

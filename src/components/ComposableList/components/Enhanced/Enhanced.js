import PropTypes from "prop-types";
import React, { Component } from "react";

class Enhanced extends Component {
  getChildContext() {
    const { uniqueKey } = this.props;

    return {
      uniqueKey
    };
  }

  render() {
    const { style, className, children } = this.props;

    return (
      <div className={className || "composable-list"} style={style}>
        {children}
      </div>
    );
  }
}

Enhanced.defaultProps = {
  className: ""
};

Enhanced.propTypes = {
  uniqueKey: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Enhanced.childContextTypes = {
  uniqueKey: PropTypes.string
};

export default Enhanced;

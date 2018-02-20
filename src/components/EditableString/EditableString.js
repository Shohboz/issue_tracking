import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class EditableString extends Component {
  state = {
    value: this.props.value,
    editable: this.props.editable,
    meta: {
      error: "",
      touched: false
    }
  };

  onBlur = e => {
    setTimeout(() => {
      if (this.state.editable) {
        this.cancel();
      }
    }, 300);
  };

  onClick = e => {
    e.preventDefault();
    this.setState({ editable: true });
  };

  validate(value) {
    const { validate } = this.props;
    let error = "";
    return (
      validate &&
      validate.some(rule => {
        const result = rule(value);
        if (result) {
          error = result;
        }
        return result;
      }) &&
      error
    );
  }

  onChange = e => {
    const { target: { value } } = e;
    const { meta: oldMeta } = this.state;
    const error = this.validate(value);
    const meta = { ...oldMeta, touched: true, error };

    this.setState({ value, meta });
  };

  onKeyDown = e => {
    const { keyCode } = e;
    switch (keyCode) {
      case 13:
        this.onSubmit();
        break;
      case 27:
        this.cancel();
        break;
      default:
        break;
    }
  };

  onSubmit = () => {
    const { onSave, staticWithoutValue } = this.props;
    const { value } = this.state;
    if (!this.validate(value)) {
      if (staticWithoutValue) {
        this.setState({ editable: false, value: "" });
      } else {
        this.setState({ editable: false });
      }
      onSave(value);
    }
  };

  cancel = () => {
    const { value } = this.props;
    const { meta: oldMeta } = this.state;
    const meta = { ...oldMeta, error: "" };
    this.setState({ editable: false, value, meta });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value && !this.state.editable) {
      this.setState({ value: nextProps.value });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editable && this.state.editable) {
      this.input.focus();
    }
  }

  renderEditableComponent() {
    const { meta: { error, touched } } = this.state;
    return (
      <Fragment>
        <div className="input-group">
          <input
            className="form-control"
            ref={e => {
              this.input = e;
            }}
            value={this.state.value}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
          />
          <div className="input-group-btn">
            <div className="btn btn-white btn-sm" onClick={this.cancel}>
              <i className="glyphicon glyphicon-remove" />
            </div>
            <div
              className="btn btn-success btn-sm"
              disabled={error}
              onClick={this.onSubmit}
            >
              <i className="glyphicon glyphicon-ok" />
            </div>
          </div>
        </div>
        {touched && (error && <span>{error}</span>)}
      </Fragment>
    );
  }

  renderStaticComponent() {
    const { tagName: Element, className, staticWithoutValue } = this.props;
    const val = staticWithoutValue ? "" : this.state.value;
    return (
      <Element className={`vlink ${className}`} onClick={this.onClick}>
        {val}
      </Element>
    );
  }

  render() {
    const { editable } = this.state;
    return editable
      ? this.renderEditableComponent()
      : this.renderStaticComponent();
  }

  static propTypes = {
    editable: PropTypes.bool,
    tagName: PropTypes.string,
    value: PropTypes.string,
    onSave: PropTypes.func,
    validate: PropTypes.array
  };

  static defaultProps = {
    ediatble: false,
    value: "",
    tagName: "span"
  };
}

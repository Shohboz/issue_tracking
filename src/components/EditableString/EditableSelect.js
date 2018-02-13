import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

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

  onChange = value => {
    // onChange = e => {
    // const { target: { value } } = e;
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
    const { onSave } = this.props;
    const { value, meta: { error } } = this.state;
    if (!error) {
      this.setState({ editable: false });
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
    const { value, meta: { error, touched } } = this.state;
    const { optionsToRender: options } = this.props;
    return (
      <div>
        <div className="input-group">
          <Select
            ref={e => {
              this.input = e;
            }}
            value={value}
            onChange={this.onChange}
            onBlur={this.onBlur}
            options={options}
            disabled={!!error}
            simpleValue
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
      </div>
    );
  }

  renderStaticComponent() {
    const { tagName: Element, className, format } = this.props;
    return (
      <Element className={`vlink ${className}`} onClick={this.onClick}>
        {(this.state.value && format(this.state.value)) || ""}
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
    className: PropTypes.string,
    value: PropTypes.string,
    onSave: PropTypes.func,
    validate: PropTypes.array,
    optionsToRender: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      })
    ),
    format: PropTypes.func
  };

  static defaultProps = {
    ediatble: false,
    className: "",
    value: "",
    tagName: "span"
  };
}

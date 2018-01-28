import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../components/Form";
import { save } from "redux/users/actions";

class ReduxForm extends Component {
  onSubmit = data => {
    const { save } = this.props;
    save(data);
  };

  render() {
    return <Form {...this.props} onSubmit={this.onSubmit} />;
  }
}

const optionsRole = [
  { value: "admin", label: "admin" },
  { value: "user", label: "user" }
];

const mapStateToProps = () => ({ optionsRole });

export default connect(mapStateToProps, { save })(ReduxForm);

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

export default connect(null, { save })(ReduxForm);

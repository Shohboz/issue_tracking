import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectForm from "../components/Form";
import { addNotification } from "redux/notifications/actions";
import { FAIL } from "redux/notifications/constants";

let counter = 0;

class Form extends Component {
  onSubmit = () => {
    const { addNotification } = this.props;
    counter++;
    addNotification(
      {
        type: FAIL,
        text: `Создание проекта недоступно`
      },
      counter
    );
  };

  render() {
    return <ProjectForm {...this.props} onSubmit={this.onSubmit} />;
  }
}

export default connect(null, { addNotification })(Form);

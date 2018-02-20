import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../components/Form";
import { save } from "redux/projects/actions";
import { loadEntity as load } from "redux/project/actions";

class ReduxForm extends Component {
  componentDidMount() {
    const { load, match: { params: { projectID } } } = this.props;
    if (projectID && projectID !== "new") {
      load(projectID, "project");
    }
  }

  componentDidUpdate(prevProps) {
    const { load, match: { params } } = this.props;
    const { match: { params: prevParams } } = prevProps;

    if (
      params["projectID"] &&
      params["projectID"] !== "new" &&
      prevParams["projectID"] !== params["projectID"]
    ) {
      load(params["projectID"], "project");
    }
  }

  onSubmit = data => {
    const { save } = this.props;
    save(data);
  };

  render() {
    return <Form {...this.props} onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    projects: { current: { main: { data, isFetching, errors } } }
  } = state;
  const { match: { params: { projectID } } } = ownProps;
  const initialValues = projectID && projectID !== "new" ? data : null;

  return { ...ownProps, initialValues, isFetching, errors };
};

export default connect(mapStateToProps, { save, load })(ReduxForm);

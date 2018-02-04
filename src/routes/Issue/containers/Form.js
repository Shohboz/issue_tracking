import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../components/Form";
import EditForm from "../components/EditForm";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import { save } from "redux/issues/actions";
import { load, reset } from "redux/issue/actions";
import { loadAll as loadProjects } from "redux/projects/actions";
import { loadAll as loadDepartments } from "redux/departments/actions";
import {
  toRenderListUsers,
  toRenderListProjects,
  toRenderListDepartments
} from "redux/selectors";
import { optionsStatus } from "redux/fixtures";

class ReduxForm extends Component {
  onSubmit = data => {
    const { save } = this.props;
    save(data);
  };

  componentDidMount() {
    const {
      load,
      reset,
      loadDepartments,
      loadProjects,
      match: { params: { issueID: id } }
    } = this.props;
    if (!id) {
      reset();
      loadDepartments();
      loadProjects();
    } else {
      load(id);
    }
  }

  render() {
    const {
      isFetching,
      errors,
      match: { params: { issueID: id } }
    } = this.props;
    return (
      <div>
        {isFetching && <Preloader />}
        {!isFetching &&
          id && <EditForm {...this.props} onSubmit={this.onSubmit} />}
        {!isFetching &&
          !id && <Form {...this.props} onSubmit={this.onSubmit} />}
        {errors && <ErrorPage errors={errors} />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    issues: { current: { main: { data: initialValues, isFetching, errors } } }
  } = state;
  return {
    ...ownProps,
    initialValues,
    isFetching,
    optionsStatus,
    optionsUsers: toRenderListUsers(state),
    optionsProjects: toRenderListProjects(state),
    optionsDepartments: toRenderListDepartments(state),
    errors
  };
};

export default connect(mapStateToProps, {
  save,
  reset,
  load,
  loadProjects,
  loadDepartments
})(ReduxForm);

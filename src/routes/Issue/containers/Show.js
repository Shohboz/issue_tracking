import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Issue from "../components/Show";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import { save } from "redux/issues/actions";
import { load, reset } from "redux/issue/actions";
import { loadAll as loadProjects } from "redux/projects/actions";
import { loadAll as loadDepartments } from "redux/departments/actions";
import {
  toObjectUsers,
  toObjectProjects,
  toObjectDepartments,
  isAdmin
} from "redux/selectors";

class ReduxForm extends Component {
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
    } else {
      load(id);
    }
    loadDepartments();
    loadProjects();
  }

  render() {
    const { isFetching, errors, data } = this.props;
    return (
      <Fragment>
        {isFetching && <Preloader />}
        {!isFetching && data && <Issue {...this.props} />}
        {errors && <ErrorPage errors={errors} />}
      </Fragment>
    );
  }
}

const optionsStatus = [
  { value: "open", label: "open" },
  { value: "closed", label: "closed" },
  { value: "urgent", label: "urgent" }
];

const mapStateToProps = (state, ownProps) => {
  const { issues: { current: { main: { data, isFetching, errors } } } } = state;
  return {
    ...ownProps,
    data,
    isAdmin: isAdmin(state),
    isFetching,
    optionsStatus,
    optionsUsers: toObjectUsers(state),
    optionsProjects: toObjectProjects(state),
    optionsDepartments: toObjectDepartments(state),
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

import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../components/SearchForm";
import { search } from "redux/issues/actions";
import { actions } from "components/ComposableList";
import { loadAll as loadProjects } from "redux/projects/actions";
import { changeProject } from "redux/project/actions";
import { changeDepartment } from "redux/department/actions";
import { loadAll as loadDepartments } from "redux/departments/actions";
import {
  toRenderListUsers,
  toRenderListProjects,
  toRenderListDepartments
} from "redux/selectors";

const { paginate } = actions;

class PanelHeader extends Component {
  componentDidMount() {
    const {
      loadDepartments,
      loadProjects,
      changeProject,
      changeDepartment
    } = this.props;
    loadDepartments();
    loadProjects();
    changeProject(null);
    changeDepartment(null);
  }

  onSubmit = data => {
    const { search, uniqueKey, paginate } = this.props;
    paginate(uniqueKey, { current: 0 });
    search(data);
  };

  render() {
    return <Form {...this.props} onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { issues: { main: { isFetching } } } = state;
  const {
    projects: { current: { main: { departmentId } } },
    departments: { current: { main: { projectId } } }
  } = state;
  const { match } = ownProps;
  return {
    initialValues: {
      project_id:
        projectId || (match && match.params && match.params.projectID),
      department_id:
        departmentId || (match && match.params && match.params.departmentID)
    },
    optionsUsers: toRenderListUsers(state),
    optionsProjects: toRenderListProjects(state),
    optionsDepartments: toRenderListDepartments(state),
    isFetching
  };
};

export default connect(mapStateToProps, {
  search,
  loadProjects,
  loadDepartments,
  paginate,
  changeProject,
  changeDepartment
})(PanelHeader);

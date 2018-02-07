import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../components/SearchForm";
import { search } from "redux/issues/actions";
import { actions } from "components/ComposableList";

import { loadAll as loadProjects } from "redux/projects/actions";
import { loadAll as loadDepartments } from "redux/departments/actions";
import {
  toRenderListUsers,
  toRenderListProjects,
  toRenderListDepartments
} from "redux/selectors";

const { paginate } = actions;

class PanelHeader extends Component {
  componentDidMount() {
    const { loadDepartments, loadProjects } = this.props;
    loadDepartments();
    loadProjects();
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
  const { match } = ownProps;
  return {
    initialValues: {
      project_id: match && match.params && match.params.projectID
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
  paginate
})(PanelHeader);

import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import IssueForm from "routes/Issue/components/Panel";
import IssueShow from "routes/Issue/containers/Show";
import Issues from "routes/Issues";
import { loadAll as loadUsers } from "redux/users/actions";

class IssuesApp extends Component {
  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  render() {
    return (
      <Switch>
        <Route exact path={"/issues/new"} component={withRouter(IssueForm)} />
        <Route
          exact
          path={`/issues/:issueID`}
          component={withRouter(IssueShow)}
        />
        <Route
          exact
          path={`/issues/:issueID/edit`}
          component={withRouter(IssueForm)}
        />
        <Route exact path={"/issues"} component={Issues} />
      </Switch>
    );
  }
}

export default connect(null, {
  loadUsers
})(IssuesApp);

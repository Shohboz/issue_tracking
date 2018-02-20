import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Layout from "components/Layout";
import Project from "routes/Project";
import Projects from "routes/Projects";
import Archived from "routes/Projects/containers/archived";
import Users from "routes/Users";
import Departments from "routes/Departments";
import Department from "routes/Department";
import ProjectForm from "routes/Project/components/WithGrid";
import UserForm from "routes/User/components/Panel";
import DepartmentForm from "routes/Department/components/Panel";
import Issues from "routes/Issues/routes";
import Profile from "routes/Profile";

export default (
  <Layout>
    <Switch>
      <Route exact path={"/projects/new"} component={ProjectForm} />
      <Route
        exact
        path={`/projects/:projectID`}
        component={withRouter(Project)}
      />
      <Route exact path={`/issues/:issueID?`} component={withRouter(Issues)} />
      <Route exact path={"/archived_projects"} component={Archived} />
      <Route exact path={"/projects"} component={Projects} />
      <Route exact path={"/users/new"} component={withRouter(UserForm)} />
      <Route exact path={"/users/:userID"} component={withRouter(UserForm)} />
      <Route exact path={"/users"} component={Users} />
      <Route exact path={"/account/profile"} component={Profile} />
      <Route exact path={"/departments/new"} component={DepartmentForm} />
      <Route exact path={"/departments/:departmentID"} component={Department} />
      <Route exact path={"/departments"} component={Departments} />
      <Route path={"*"} component={withRouter(Issues)} />
    </Switch>
  </Layout>
);

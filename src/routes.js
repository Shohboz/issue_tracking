import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Layout from "components/Layout";
import Project from "routes/Project";
import Projects from "routes/Projects";
import Departments from "routes/Departments";
import Issues from "routes/Issues";

export default (
  <Layout>
    <Switch>
      <Route
        exact
        path={`/projects/:projectID`}
        component={withRouter(Project)}
      />
      <Route exact path={`/issues/:issueID`} component={withRouter(Project)} />
      <Route exact path={"/projects"} component={Projects} />
      <Route exact path={"/departments"} component={Departments} />
      <Route exact path={"/issues"} component={Issues} />
      <Route path={"*"} component={Projects} />
    </Switch>
  </Layout>
);

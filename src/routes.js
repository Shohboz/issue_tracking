import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Layout from "components/Layout";
import Projects from "routes/Projects";
import Issues from "routes/Issues";

const Project = ({ match: { params: { projectID: id } } }) => (
  <div>Project #{id}</div>
);

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
      <Route exact path={"/issues"} component={Issues} />
      <Route path={"*"} component={Projects} />
    </Switch>
  </Layout>
);

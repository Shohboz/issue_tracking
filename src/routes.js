import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Layout from "components/Layout";
import Projects from "routes/Projects";

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
      <Route exact path={"/projects"} component={Projects} />
      <Route path={"*"} component={Projects} />
    </Switch>
  </Layout>
);

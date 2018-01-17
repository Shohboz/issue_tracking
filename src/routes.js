import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

const Layout = ({ children }) => <div>{children}</div>;

const Project = () => <div>Project</div>;

const Projects = () => <div>Projects</div>;

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

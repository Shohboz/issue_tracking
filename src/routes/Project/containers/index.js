import React from "react";
import { Grid } from "react-bootstrap";
import Issues from "routes/Issues/containers/ProjectIssues";

const Departments = () => <div>Departments</div>;

export default ({ match }) => (
  <Grid fluid={true}>
    <div className="col-md-6">
      <Issues match={match} />
    </div>
    <div className="col-md-6">
      <Departments match={match} />
    </div>
  </Grid>
);

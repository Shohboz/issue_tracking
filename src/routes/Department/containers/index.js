import React from "react";
import { Grid, Col } from "react-bootstrap";
import Issues from "./IssuesSearch";
import Projects from "./Projects";

export default ({ match }) => (
  <Grid fluid={true}>
    <Col xs={12} md={6}>
      <Issues match={match} />
    </Col>
    <Col xs={12} md={6}>
      <Projects match={match} />
    </Col>
  </Grid>
);

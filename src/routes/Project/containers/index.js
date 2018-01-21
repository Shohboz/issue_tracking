import React from "react";
import { Grid, Col } from "react-bootstrap";
import Issues from "./Issues";
import Departments from "./Departments";

export default ({ match }) => (
  <Grid fluid={true}>
    <Col xs={12} md={6}>
      <Issues match={match} />
    </Col>
    <Col xs={12} md={6}>
      <Departments match={match} />
    </Col>
  </Grid>
);

import React from "react";
import { Grid, Col } from "react-bootstrap";
import Issues from "./IssuesSearch";
import Departments from "./Departments";
import Form from "../components/Panel";

export default ({ match }) => (
  <Grid fluid={true}>
    <Col xs={12} md={6}>
      <Issues match={match} />
    </Col>
    <Col xs={12} md={6}>
      <Form match={match} />
      <Departments match={match} />
    </Col>
  </Grid>
);

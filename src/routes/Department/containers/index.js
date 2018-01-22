import React from "react";
import { Grid } from "react-bootstrap";
import Projects from "./Projects";

export default ({ match }) => (
  <Grid>
    <Projects match={match} />
  </Grid>
);

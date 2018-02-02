import React from "react";
import Profile from "./Profile";
import { Grid, Panel } from "react-bootstrap";

export default props => (
  <Grid>
    <Panel>
      <Panel.Heading>{`Профиль ${props.name}`}</Panel.Heading>
      <Panel.Body>
        <Profile {...props} />
      </Panel.Body>
    </Panel>
  </Grid>
);

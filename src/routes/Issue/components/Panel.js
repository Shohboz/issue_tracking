import React from "react";
import Form from "../containers/Form";
import { Grid, Panel } from "react-bootstrap";

export default props => (
  <Grid>
    <Panel>
      <Panel.Heading>Форма создания вопроса</Panel.Heading>
      <Panel.Body>
        <Form {...props} />
      </Panel.Body>
    </Panel>
  </Grid>
);

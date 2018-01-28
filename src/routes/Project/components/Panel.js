import React from "react";
import Form from "../containers/Form";
import { Grid, Panel } from "react-bootstrap";

export default ({ data }) => (
  <Grid>
    <Panel>
      <Panel.Heading>Форма создания проекта</Panel.Heading>
      <Panel.Body>
        <Form data={data} />
      </Panel.Body>
    </Panel>
  </Grid>
);

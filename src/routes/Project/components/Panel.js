import React from "react";
import Form from "../containers/Form";
import { Grid, Panel } from "react-bootstrap";

export default ({ data, match }) => (
  <Grid>
    <Panel>
      <Panel.Heading>
        {match.params.projectID
          ? "Форма редактирования проекта"
          : "Форма создания проекта"}
      </Panel.Heading>
      <Panel.Body>
        <Form data={data} />
      </Panel.Body>
    </Panel>
  </Grid>
);

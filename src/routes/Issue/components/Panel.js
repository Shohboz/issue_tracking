import React from "react";
import Form from "../containers/Form";
import { Grid, Panel } from "react-bootstrap";

export default props => (
  <Grid>
    <Panel>
      <Panel.Heading>
        {props.match.params.issueID
          ? "Форма редактирования вопроса"
          : "Форма создания вопроса"}
      </Panel.Heading>
      <Panel.Body>
        <Form {...props} />
      </Panel.Body>
    </Panel>
  </Grid>
);

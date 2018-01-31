import React from "react";
import Form from "../containers/Form";
import { Grid, Panel } from "react-bootstrap";

export default props => (
  <Grid>
    <Panel>
      <Panel.Heading>
        {props.match.params.userID
          ? "Форма редактирования пользователя"
          : "Форма создания пользователя"}
      </Panel.Heading>
      <Panel.Body>
        <Form {...props} />
      </Panel.Body>
    </Panel>
  </Grid>
);

import React from "react";
import Form from "../containers/Form";
import { Panel } from "react-bootstrap";

export default ({ data, match }) => (
  <Panel>
    <Panel.Heading>
      {match.params.projectID
        ? "Форма редактирования проекта"
        : "Форма создания проекта"}
    </Panel.Heading>
    <Panel.Body>
      <Form data={data} match={match} />
    </Panel.Body>
  </Panel>
);

import React from "react";
import { Panel } from "react-bootstrap";
import ErrorPage from "components/ErrorPage";

export default () => (
  <div className="container">
    <Panel.Body>
      <ErrorPage errors={{ message: "Страница не найдена" }} />
    </Panel.Body>
  </div>
);

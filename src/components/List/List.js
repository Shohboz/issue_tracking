import React from "react";
import { Panel } from "react-bootstrap";

export default WrappedComponent => ({ title }) => props => (
  <Panel>
    <Panel.Heading>{title}</Panel.Heading>
    <WrappedComponent {...props} />
  </Panel>
);

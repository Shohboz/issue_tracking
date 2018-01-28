import React from "react";
import { Panel } from "react-bootstrap";

export default WrappedComponent => ({ title }) => ({ items }) => (
  <Panel>
    <Panel.Heading>{title}</Panel.Heading>
    <WrappedComponent items={items} />
  </Panel>
);

import React from "react";

export default WrappedComponent => ({ title }) => ({ items }) => (
  <div className="panel panel-default">
    <div className="panel-heading">{title}</div>
    <WrappedComponent items={items} />
  </div>
);

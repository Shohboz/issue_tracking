import React from "react";
import NoItems from "components/EmptyList";

export default WrappedComponent => ({ title }) => ({ items }) => (
  <div className="panel panel-default">
    <div className="panel-heading">{title}</div>
    {items.length ? <WrappedComponent items={items} /> : <NoItems />}
  </div>
);

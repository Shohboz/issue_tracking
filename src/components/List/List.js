import React from "react";
import NoItems from "components/EmptyList";

export default WrappedComponent => ({ title }) => ({ items }) => (
  <div className="panel panel-default">
    <div className="panel-heading">{title}</div>
    <div className="panel-body">
      <div className="row">
        <div className="col-sm-12">
          {items.length ? <WrappedComponent items={items} /> : <NoItems />}
        </div>
      </div>
    </div>
  </div>
);

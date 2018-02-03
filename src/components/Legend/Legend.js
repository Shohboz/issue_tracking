import React from "react";

export default ({ title, children }) => (
  <fieldset className="scheduler-border">
    <legend className="scheduler-border">{title}</legend>
    <div className="control-group">{children}</div>
  </fieldset>
);

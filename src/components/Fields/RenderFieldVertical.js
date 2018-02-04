import React from "react";

export default ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="control-label">{label}</label>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form-control"
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

import React from "react";
import { Field } from "redux-form";

export default ({ input, label, disabled }) => (
  <div className="form-group">
    <label htmlFor={input.name} className="col-sm-2 control-label">
      {label}
    </label>
    <div className="col-sm-10">
      <Field {...input} component="input" disabled={disabled} type="checkbox" />
    </div>
  </div>
);

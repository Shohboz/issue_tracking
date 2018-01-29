import React from "react";

export default ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="col-sm-2 control-label">{label}</label>
    <div className="col-sm-10">
      <textarea
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      >
        {input.value}
      </textarea>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

import React from "react";

export default ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <div className="col-sm-12">
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

import React from "react";

export default ({ input, label, type, value }) => (
  <div className="form-group">
    <label className="col-sm-2 control-label">{label}</label>
    <div className="col-sm-10">
      <p
        {...input}
        placeholder={label}
        type={type}
        className="form-control-static"
      >
        {value}
      </p>
    </div>
  </div>
);

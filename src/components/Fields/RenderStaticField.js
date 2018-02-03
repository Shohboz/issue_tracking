import React from "react";

export default ({ input, label, type, value }) => (
  <div>
    <label className="col-sm-3 control-label" style={{ textAlign: "left" }}>
      {label}
    </label>
    <div className="col-sm-9">
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

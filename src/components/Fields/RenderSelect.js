import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

export default ({
  input,
  label,
  optionsToRender,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label className="col-sm-2 control-label">{label}</label>
    <div className="col-sm-10">
      <Select
        value={input.value}
        onChange={input.onChange}
        onBlur={() => input.onBlur(input.value)}
        options={optionsToRender}
        placeholder={label}
        simpleValue
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

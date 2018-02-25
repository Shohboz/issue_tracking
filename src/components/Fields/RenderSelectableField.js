import React from "react";
import EditableString from "components/EditableString";

export default ({
  input,
  label,
  type,
  id,
  value,
  optionsToRender,
  name,
  onSave: save,
  format,
  validate,
  labelStyle
}) => (
  <div>
    <label className="col-sm-4 control-label" style={labelStyle || {}}>
      {label}
    </label>
    <div className="col-sm-8">
      <EditableString
        tagName={"p"}
        className="form-control-static"
        value={value}
        optionsToRender={optionsToRender}
        onSave={x => save({ id, [name]: x })}
        validate={validate}
        format={format}
      />
    </div>
  </div>
);

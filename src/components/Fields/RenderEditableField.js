import React from "react";
import { EditableString } from "components/EditableString";

export default ({
  input,
  label,
  type,
  value,
  name,
  onSave: save,
  validate,
  tagName,
  staticWithoutValue,
  className
}) => (
  <div>
    <label className="col-sm-4 control-label">{label}</label>
    <div className="col-sm-8">
      <EditableString
        className={`form-control-static ${className || ""}`}
        value={value}
        staticWithoutValue={staticWithoutValue}
        tagName={tagName || "div"}
        onSave={val => save({ [name]: val })}
        validate={validate}
      />
    </div>
  </div>
);

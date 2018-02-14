import React from "react";
import { EditableString } from "components/EditableString";
import { nonEmpty } from "redux/validation";

export default ({
  input,
  label,
  type,
  value,
  name,
  onSave: save,
  // validate,
  tagName
}) => (
  <div>
    <label className="col-sm-4 control-label">{label}</label>
    <div className="col-sm-8">
      <EditableString
        className="form-control-static"
        value={value}
        tagName={tagName || "div"}
        onSave={val => save({ [name]: val })}
        validate={[nonEmpty]}
      />
    </div>
  </div>
);

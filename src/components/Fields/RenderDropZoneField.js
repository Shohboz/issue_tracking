import React from "react";
import RenderDropZone from "./RenderDropZone";

export default field => {
  const files = field.input.value;
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label">{field.label}</label>
      <div className="col-sm-10">
        <RenderDropZone {...field} />
      </div>
    </div>
  );
};

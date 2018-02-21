import React, { Fragment } from "react";
import { RenderStaticField } from "components/Fields";

const RenderEnable = ({ name, label, disabled, value }) => (
  <Fragment>
    <label
      htmlFor={name}
      className="col-sm-4 control-label"
      style={{ textAlign: "left" }}
    >
      {label}
    </label>
    <div className="col-sm-8">
      <input disabled={disabled} checked={value} type="checkbox" />
    </div>
  </Fragment>
);

export default ({ name, archived }) => (
  <div className="form-horizontal">
    <RenderStaticField name="name" value={name} label="Название" type="text" />

    <RenderEnable
      value={archived}
      name="archived"
      label="Архивный"
      disable={true}
    />
  </div>
);

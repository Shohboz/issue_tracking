import React from "react";
import { RenderEditableField } from "components/Fields";
// import { nonEmpty } from "redux/validation";

export default ({ name, login, email, onSave }) => (
  <div className="form-horizontal">
    <RenderEditableField value={name} name="name" label="Имя" onSave={onSave} />
    <RenderEditableField
      value={login}
      name="login"
      label="Логин"
      onSave={onSave}
      // validate={[nonEmpty]}
    />
    <RenderEditableField
      value={email}
      name="email"
      label="Email"
      onSave={onSave}
      // validate={[nonEmpty]}
    />
  </div>
);

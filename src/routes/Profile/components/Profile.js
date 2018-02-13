import React from "react";
import { RenderEditableField } from "components/Fields";

export default ({ name, login, email, onSave }) => (
  <div className="form-horizontal">
    <RenderEditableField value={name} name="name" label="Имя" onSave={onSave} />
    <RenderEditableField
      value={login}
      name="login"
      label="Логин"
      onSave={onSave}
    />
    <RenderEditableField
      value={email}
      name="email"
      label="Email"
      onSave={onSave}
    />
  </div>
);

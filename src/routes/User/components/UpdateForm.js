import React from "react";
import { RenderEditableField, RenderSelectableField } from "components/Fields";
import { nonEmpty } from "redux/validation";

export default ({ optionsRole, name, role, login, email, onSave }) => (
  <div className="form-horizontal">
    <RenderEditableField
      value={name}
      name="name"
      label="Имя"
      onSave={onSave}
      validate={[nonEmpty]}
    />
    <RenderEditableField
      value={login}
      name="login"
      label="Логин"
      onSave={onSave}
      validate={[nonEmpty]}
    />
    <RenderEditableField
      value={email}
      name="email"
      label="Email"
      onSave={onSave}
      validate={[nonEmpty]}
    />
    <RenderSelectableField
      value={role}
      name="role"
      label="Роль"
      optionsToRender={optionsRole}
      onSave={onSave}
      validate={[nonEmpty]}
    />
    <RenderEditableField
      value={""}
      name="pass"
      tagName="i"
      className="glyphicon glyphicon-edit"
      staticWithoutValue={true}
      label="Пароль"
      onSave={onSave}
      validate={[nonEmpty]}
    />
  </div>
);

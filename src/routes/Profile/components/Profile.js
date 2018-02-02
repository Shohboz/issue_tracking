import React from "react";
import { RenderStaticField } from "components/Fields";

export default ({ name, login, email, role }) => (
  <div className="form-horizontal">
    <RenderStaticField value={name} name="name" label="Имя" />
    <RenderStaticField value={login} name="login" label="Логин" />
    <RenderStaticField value={email} name="email" label="Email" />
    <RenderStaticField value={role} name="role" label="Роль" />
  </div>
);

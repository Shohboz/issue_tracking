import React from "react";
import { reduxForm, Field } from "redux-form";
import { RenderField, RenderSelect, RenderEnable } from "components/Fields";
import { required } from "redux/validation";

const Form = ({
  handleSubmit,
  valid,
  form,
  optionsRole,
  match: { params: { userID: id } }
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-horizontal">
      <Field
        name="name"
        label="Имя"
        component={RenderField}
        type="text"
        validate={[required]}
      />
      <Field
        name="login"
        label="Логин"
        component={RenderField}
        type="text"
        validate={[required]}
      />
      <Field
        name="email"
        label="Email"
        component={RenderField}
        type="text"
        validate={[required]}
      />
      {!id && (
        <Field
          name="pass"
          label="Пароль"
          component={RenderField}
          type="text"
          validate={[required]}
        />
      )}
      <Field
        name="role"
        label="Роль"
        component={RenderSelect}
        optionsToRender={optionsRole}
        validate={[required]}
      />
      <Field
        name="enable"
        component={RenderEnable}
        label="Включен"
        validate={[required]}
      />
      <button
        type="submit"
        className="btn btn-default pull-right"
        disabled={!valid}
      >
        {id ? "Обновить" : "Создать"}
      </button>
    </div>
  </form>
);

export default reduxForm({ form: "userForm", enableReinitialize: true })(Form);

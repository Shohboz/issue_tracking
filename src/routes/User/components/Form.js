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
        label="name"
        component={RenderField}
        type="text"
        validate={[required]}
      />
      <Field
        name="login"
        label="login"
        component={RenderField}
        type="text"
        validate={[required]}
      />
      <Field
        name="email"
        label="email"
        component={RenderField}
        type="text"
        validate={[required]}
      />
      {!id && (
        <Field
          name="pass"
          label="pass"
          component={RenderField}
          type="text"
          validate={[required]}
        />
      )}
      {!id && (
        <Field
          name="role"
          label="role"
          component={RenderSelect}
          optionsToRender={optionsRole}
        />
      )}
      <Field name="enable" component={RenderEnable} label="enable" />
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

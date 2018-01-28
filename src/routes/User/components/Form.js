import React from "react";
import { reduxForm, Field } from "redux-form";
import { RenderField } from "components/Fields";
import { required } from "redux/validation";

const Form = ({ handleSubmit, valid, form }) => (
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
      <Field
        name="pass"
        label="pass"
        component={RenderField}
        type="text"
        validate={[required]}
      />
      <button
        type="submit"
        className="btn btn-default pull-right"
        disabled={!valid}
      >
        Создать
      </button>
    </div>
  </form>
);

export default reduxForm({ form: "userForm", enableReinitialize: true })(Form);

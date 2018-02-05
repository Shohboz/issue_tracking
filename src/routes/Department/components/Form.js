import React from "react";
import { reduxForm, Field } from "redux-form";
import { RenderField } from "components/Fields";
import { required } from "redux/validation";

const Form = ({ handleSubmit, valid, form }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-horizontal">
      <Field
        name="name"
        label="Название"
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

export default reduxForm({ form: "projectForm", enableReinitialize: true })(
  Form
);

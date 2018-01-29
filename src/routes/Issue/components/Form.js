import React from "react";
import { reduxForm, Field } from "redux-form";
import { RenderField, RenderSelect } from "components/Fields";
import { required } from "redux/validation";

const Form = ({
  handleSubmit,
  valid,
  form,
  optionsStatus,
  match: { params: { issueID: id } }
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-horizontal">
      <Field
        name="title"
        label="title"
        component={RenderField}
        type="text"
        validate={[required]}
      />
      <Field
        name="status"
        label="status"
        component={RenderSelect}
        optionsToRender={optionsStatus}
      />
      <Field
        name="description"
        label="description"
        component={RenderField}
        type="text"
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

export default reduxForm({ form: "issueForm", enableReinitialize: true })(Form);

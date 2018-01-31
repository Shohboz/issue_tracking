import React from "react";
import { reduxForm, Field } from "redux-form";
import { RenderSelect } from "components/Fields";

const Form = ({ handleSubmit, valid, form, optionsStatus }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-horizontal">
      <Field
        name="status"
        label="статус"
        component={RenderSelect}
        optionsToRender={optionsStatus}
      />
      <button
        type="submit"
        className="btn btn-default pull-right"
        disabled={!valid}
      >
        Обновить
      </button>
    </div>
  </form>
);

export default reduxForm({ form: "issueForm", enableReinitialize: true })(Form);

import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  RenderField,
  RenderSelect,
  RenderTextareaField
} from "components/Fields";
import { required } from "redux/validation";

const Form = ({
  handleSubmit,
  valid,
  form,
  optionsStatus,
  optionsUsers,
  match: { params: { issueID: id } }
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-horizontal">
      <Field
        name="title"
        label="заголовок"
        component={RenderField}
        type="text"
        validate={[required]}
      />
      <Field
        name="status"
        label="статус"
        component={RenderSelect}
        optionsToRender={optionsStatus}
      />
      <Field
        name="assignee_id"
        label="исполнитель"
        component={RenderSelect}
        optionsToRender={optionsUsers}
      />
      <Field
        name="description"
        label="описание"
        component={RenderTextareaField}
        type="textarea"
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

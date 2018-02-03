import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { RenderTextField } from "components/Fields";
import { required } from "redux/validation";

const Form = ({ handleSubmit, valid, onClose, isFetching }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-horizontal">
      <Field
        name="comment"
        label="Добавить комментарий"
        component={RenderTextField}
        type="text"
        validate={[required]}
      />
      <div className="btn-group">
        <button
          className="btn btn-default"
          onClick={onClose}
          disabled={isFetching}
        >
          Отменить
        </button>
        <button
          type="submit"
          className="btn btn-default"
          disabled={!valid || isFetching}
        >
          Создать
        </button>
      </div>
    </div>
  </form>
);

export default reduxForm({ form: "commentsForm", enableReinitialize: true })(
  Form
);

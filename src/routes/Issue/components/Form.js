import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import {
  RenderField,
  RenderSelect,
  RenderTextareaField,
  RenderPicker
} from "components/Fields";
import { required } from "redux/validation";

class Form extends Component {
  state = {
    date: null
  };

  onChangeDate = (d, value, formattedValue) => {
    this.setState({ date: value });
  };

  render() {
    const {
      handleSubmit,
      valid,
      form,
      optionsStatus,
      optionsUsers,
      optionsProjects,
      optionsDepartments,
      match: { params: { issueID: id } }
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-horizontal">
          <Field
            name="title"
            label="Заголовок"
            component={RenderField}
            type="text"
            validate={[required]}
          />
          <Field
            name="meeting_date"
            label="Дата встречи"
            type="text"
            date={this.state.date}
            onChange={this.onChangeDate}
            component={RenderPicker}
            validate={[required]}
          />
          <Field
            name="status"
            label="Статус"
            component={RenderSelect}
            optionsToRender={optionsStatus}
          />
          <Field
            name="assignee_id"
            label="Исполнитель"
            component={RenderSelect}
            optionsToRender={optionsUsers}
          />
          <Field
            name="project_id"
            label="Проект"
            component={RenderSelect}
            optionsToRender={optionsProjects}
          />
          <Field
            name="department_id"
            label="Отдел"
            component={RenderSelect}
            optionsToRender={optionsDepartments}
          />
          <Field
            name="description"
            label="Описание"
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
  }
}

export default reduxForm({ form: "issueForm", enableReinitialize: true })(Form);

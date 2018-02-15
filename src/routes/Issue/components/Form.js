import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import {
  RenderField,
  RenderSelect,
  RenderTextareaField,
  RenderPicker
} from "components/Fields";
import { required } from "redux/validation";
import { RenderDropZoneField } from "components/Fields";

class Form extends Component {
  state = {
    date: null,
    due_date: null
  };

  onChangeDate = (d, value, formattedValue) => {
    this.setState({ date: value });
  };

  onChangeDueDate = (d, value, formattedValue) => {
    this.setState({ due_date: value });
  };

  render() {
    const {
      handleSubmit,
      valid,
      form,
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
            label="Дата совещания"
            type="text"
            date={this.state.date}
            onChange={this.onChangeDate}
            component={RenderPicker}
            validate={[required]}
          />
          <Field
            name="due_date"
            label="Выполнить до"
            type="text"
            date={this.state.due_date}
            onChange={this.onChangeDueDate}
            component={RenderPicker}
          />
          <Field
            name="assignee_id"
            label="Исполнитель"
            component={RenderSelect}
            optionsToRender={optionsUsers}
            validate={[required]}
          />
          <Field
            name="project_id"
            label="Проект"
            component={RenderSelect}
            optionsToRender={optionsProjects}
            validate={[required]}
          />
          <Field
            name="department_id"
            label="Отдел"
            component={RenderSelect}
            optionsToRender={optionsDepartments}
            validate={[required]}
          />
          <Field
            name="description"
            label="Описание"
            component={RenderTextareaField}
            type="textarea"
          />
          <Field name="files" label="Файлы" component={RenderDropZoneField} />
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

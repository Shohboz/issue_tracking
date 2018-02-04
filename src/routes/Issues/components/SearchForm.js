import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import {
  RenderFieldVertical as RenderField,
  RenderSelectVertical as RenderSelect,
  RenderPickerVertical as RenderPicker
} from "components/Fields";
import { optionsStatus } from "redux/fixtures";
import { Col } from "react-bootstrap";

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
      optionsUsers,
      optionsProjects,
      optionsDepartments,
      isFetching
    } = this.props;

    return (
      <div className="panel-body">
        <form onSubmit={handleSubmit}>
          <Col xs={12} md={12}>
            <div className="row">
              <Col xs={12} md={12}>
                <Field
                  name="text"
                  label="Полнотекстовый поиск"
                  component={RenderField}
                  type="text"
                />
              </Col>
            </div>
            <div className="row">
              <Col xs={12} md={3}>
                <Field
                  name="meeting_date_start"
                  label="Дата встречи"
                  type="text"
                  date={this.state.date}
                  onChange={this.onChangeDate}
                  component={RenderPicker}
                />
              </Col>
              <Col xs={12} md={3}>
                <Field
                  name="created_start"
                  label="Дата создания"
                  type="text"
                  date={this.state.date}
                  onChange={this.onChangeDate}
                  component={RenderPicker}
                />
              </Col>
              <Col xs={12} md={3}>
                <Field
                  name="status"
                  label="Статус"
                  component={RenderSelect}
                  optionsToRender={optionsStatus}
                />
              </Col>
            </div>
            <div className="row">
              <Col xs={12} md={3}>
                <Field
                  name="assignee_id"
                  label="Исполнитель"
                  component={RenderSelect}
                  optionsToRender={optionsUsers}
                />
              </Col>
              <Col xs={12} md={3}>
                <Field
                  name="reporter_id"
                  label="Автор"
                  component={RenderSelect}
                  optionsToRender={optionsUsers}
                />
              </Col>
              <Col xs={12} md={3}>
                <Field
                  name="project_id"
                  label="Проект"
                  component={RenderSelect}
                  optionsToRender={optionsProjects}
                />
              </Col>
              <Col xs={12} md={3}>
                <Field
                  name="department_id"
                  label="Отдел"
                  component={RenderSelect}
                  optionsToRender={optionsDepartments}
                />
              </Col>
            </div>
          </Col>
          <Col xs={12} md={12}>
            <button
              type="submit"
              className="btn btn-default pull-right"
              disabled={!valid || isFetching}
            >
              Найти
            </button>
          </Col>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "searchIssueForm", enableReinitialize: true })(
  Form
);

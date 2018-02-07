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
    meeting_date_start: null,
    created_start: null,
    meeting_date_stop: null,
    created_stop: null
  };

  onChangeMeetingDate = (d, value, formattedValue) => {
    this.setState({ meeting_date_start: value });
  };

  onChangeCreatedDate = (d, value, formattedValue) => {
    this.setState({ created_start: value });
  };

  onChangeMeetingStopDate = (d, value, formattedValue) => {
    this.setState({ meeting_date_stop: value });
  };

  onChangeCreatedStopDate = (d, value, formattedValue) => {
    this.setState({ created_stop: value });
  };

  render() {
    const {
      handleSubmit,
      valid,
      form,
      optionsUsers,
      optionsProjects,
      optionsDepartments,
      isFetching,
      secondary
    } = this.props;

    return (
      <div className="panel-body">
        {secondary && (
          <form onSubmit={handleSubmit}>
            <Col xs={12} md={12}>
              <div className="row">
                <Col xs={12} md={8}>
                  <Field
                    name="text"
                    label="Полнотекстовый поиск"
                    component={RenderField}
                    type="text"
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Field
                    name="status"
                    label="Статус"
                    component={RenderSelect}
                    optionsToRender={optionsStatus}
                  />
                </Col>
              </div>
              <div className="row">
                <Col xs={12} md={6}>
                  <Field
                    name="meeting_date_start"
                    label="Дата совещания с"
                    type="text"
                    date={this.state.meeting_date_start}
                    onChange={this.onChangeMeetingDate}
                    component={RenderPicker}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Field
                    name="meeting_date_stop"
                    label="Дата совещания до"
                    type="text"
                    date={this.state.meeting_date_stop}
                    onChange={this.onChangeMeetingStopDate}
                    component={RenderPicker}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Field
                    name="created_start"
                    label="Дата создания с"
                    type="text"
                    date={this.state.created_start}
                    onChange={this.onChangeCreatedDate}
                    component={RenderPicker}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Field
                    name="created_stop"
                    label="Дата создания до"
                    type="text"
                    date={this.state.created_stop}
                    onChange={this.onChangeCreatedStopDate}
                    component={RenderPicker}
                  />
                </Col>
              </div>
              <div className="row">
                <Col xs={12} md={6}>
                  <Field
                    name="assignee_id"
                    label="Исполнитель"
                    component={RenderSelect}
                    optionsToRender={optionsUsers}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Field
                    name="reporter_id"
                    label="Автор"
                    component={RenderSelect}
                    optionsToRender={optionsUsers}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Field
                    name="project_id"
                    label="Проект"
                    component={RenderSelect}
                    optionsToRender={optionsProjects}
                  />
                </Col>
                <Col xs={12} md={6}>
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
        )}
        {!secondary && (
          <form onSubmit={handleSubmit}>
            <Col xs={12} md={12}>
              <div className="row">
                <Col xs={12} md={10}>
                  <Field
                    name="text"
                    label="Полнотекстовый поиск"
                    component={RenderField}
                    type="text"
                  />
                </Col>
                <Col xs={12} md={2}>
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
                    name="meeting_date_start"
                    label="Дата совещания с"
                    type="text"
                    date={this.state.meeting_date_start}
                    onChange={this.onChangeMeetingDate}
                    component={RenderPicker}
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Field
                    name="meeting_date_stop"
                    label="Дата совещания до"
                    type="text"
                    date={this.state.meeting_date_stop}
                    onChange={this.onChangeMeetingStopDate}
                    component={RenderPicker}
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Field
                    name="created_start"
                    label="Дата создания с"
                    type="text"
                    date={this.state.created_start}
                    onChange={this.onChangeCreatedDate}
                    component={RenderPicker}
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Field
                    name="created_stop"
                    label="Дата создания до"
                    type="text"
                    date={this.state.created_stop}
                    onChange={this.onChangeCreatedStopDate}
                    component={RenderPicker}
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
        )}
      </div>
    );
  }
}

export default reduxForm({ form: "searchIssueForm", enableReinitialize: true })(
  Form
);

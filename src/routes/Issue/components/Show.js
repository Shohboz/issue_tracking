import React from "react";
import { Grid, Panel, Col } from "react-bootstrap";
import { toLocaleDateString, getStatus, getPriority } from "redux/helpers";
import { RenderStaticField, RenderSelectableField } from "components/Fields";
import AddComment from "routes/Comments/components/AddComment";
import Comments from "routes/Comments";
import { optionsStatus, optionsPriority } from "redux/fixtures";
import { nonEmpty } from "redux/validation";

const App = ({
  match,
  data,
  optionsUsers,
  optionsProjects,
  optionsDepartments,
  save
}) => (
  <div>
    <Col xs={12} md={12}>
      <hr className="hr-text" data-content={"Подробно"} />
      <div className="row">
        <Col xs={12} md={6} className="form-horizontal">
          <RenderSelectableField
            value={data.status}
            name="status"
            id={data.id}
            label="Статус"
            optionsToRender={optionsStatus}
            onSave={save}
            format={getStatus}
            validate={[nonEmpty]}
          />
          <RenderSelectableField
            value={data.priority}
            name="priority"
            id={data.id}
            label="Приоритет"
            optionsToRender={optionsPriority}
            onSave={save}
            format={getPriority}
            validate={[nonEmpty]}
          />
          <RenderStaticField
            value={toLocaleDateString(data.created)}
            name="created"
            label="Создан"
          />
          <RenderStaticField
            value={toLocaleDateString(data.meeting_date)}
            name="meeting_date"
            label="Дата совещания"
          />
          <RenderStaticField
            value={toLocaleDateString(data.due_date)}
            name="due_date"
            label="Выполнить до"
          />
        </Col>
        <Col xs={12} md={6} className="form-horizontal">
          <RenderStaticField
            value={
              optionsUsers[data.assignee_id] &&
              optionsUsers[data.assignee_id].name
            }
            name="assignee"
            label="Исполнитель"
          />
          <RenderStaticField
            value={
              optionsUsers[data.reporter_id] &&
              optionsUsers[data.reporter_id].name
            }
            name="reporter"
            label="Автор"
          />
          <RenderStaticField
            value={
              optionsProjects[data.project_id] &&
              optionsProjects[data.project_id].name
            }
            name="project"
            label="Проект"
          />
          <RenderStaticField
            value={
              optionsDepartments[data.department_id] &&
              optionsDepartments[data.department_id].name
            }
            name="department"
            label="Отдел"
          />
        </Col>
      </div>
    </Col>
    <Col xs={12} md={12}>
      <hr className="hr-text" data-content={"Описание"} />
      <Col xs={12} md={12}>
        <p>{data.description}</p>
      </Col>
    </Col>

    <Col xs={12} md={12}>
      <hr className="hr-text" data-content={"Комментарии"} />
      <Col xs={12} md={12}>
        <Comments match={match} optionsUsers={optionsUsers} />
        <AddComment match={match} />
      </Col>
    </Col>
  </div>
);

export default props => (
  <Grid>
    <Panel>
      <Panel.Heading>{`${props.data.title}`}</Panel.Heading>
      <Panel.Body>
        <App {...props} />
      </Panel.Body>
    </Panel>
  </Grid>
);

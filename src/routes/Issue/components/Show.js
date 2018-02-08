import React from "react";
import { Grid, Panel, Col } from "react-bootstrap";
import { toLocaleDateString } from "redux/helpers";
import { RenderStaticField } from "components/Fields";
import AddComment from "routes/Comments/components/AddComment";
import Comments from "routes/Comments";

const App = ({
  match,
  data,
  optionsUsers,
  optionsProjects,
  optionsDepartments
}) => (
  <div>
    <Col xs={12} md={12}>
      <hr className="hr-text" data-content={"Подробно"} />
      <div className="row">
        <Col xs={12} md={6} className="form-horizontal">
          <RenderStaticField value={data.status} name="status" label="Статус" />
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

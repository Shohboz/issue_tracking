import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import { toLocaleDateString, getStatus, getPriority } from "redux/helpers";
import NoItems from "components/EmptyList";

const TableHeader = ({ secondary }) => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Название</th>
      <th>Статус</th>
      <th>Приоритет</th>
      {!secondary && <th>Исполнитель</th>}
      {!secondary && <th>Автор</th>}
      {!secondary && <th>Выполнить до</th>}
      <th>Дата совещания</th>
      <th>Дата создания</th>
    </tr>
  </thead>
);

const Item = ({
  secondary,
  id,
  title,
  created,
  meeting_date,
  assignee_id,
  reporter_id,
  status,
  due_date,
  priority
}) => (
  <tr
    className={
      priority === "highest" ? "danger" : priority === "high" ? "warning" : ""
    }
  >
    <td>{id}</td>
    <td>
      <Link to={`/issues/${id}`}>{title}</Link>
    </td>
    {status === "closed" ? (
      <td className="text-success">
        <strong>
          <em>{getStatus(status)}</em>
        </strong>
      </td>
    ) : (
      <td>{getStatus(status)}</td>
    )}
    <td>{getPriority(priority)}</td>
    {!secondary && <td>{assignee_id}</td>}
    {!secondary && <td>{reporter_id}</td>}
    {!secondary && <td>{toLocaleDateString(due_date)}</td>}
    <td>{toLocaleDateString(meeting_date)}</td>
    <td>{toLocaleDateString(created)}</td>
  </tr>
);

const TableBody = ({ items, secondary }) => (
  <tbody>
    {items.map((item, idx) => (
      <Item secondary={secondary} key={idx} {...item} />
    ))}
  </tbody>
);

export default ({ items, secondary, isFetching }) => (
  <Panel.Body>
    <div className="table-responsive">
      <table className="table table-striped">
        {items.length ? (
          [
            <TableHeader secondary={secondary} key="issue-header" />,
            <TableBody secondary={secondary} items={items} key="issue-list" />
          ]
        ) : (
          <NoItems />
        )}
      </table>
    </div>
  </Panel.Body>
);

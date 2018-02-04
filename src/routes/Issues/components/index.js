import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import NoItems from "components/EmptyList";

const TableHeader = ({ secondary }) => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Название</th>
      <th>Статус</th>
      {!secondary && <th>Исполнитель</th>}
      {!secondary && <th>Автор</th>}
      <th>Дата создания</th>
    </tr>
  </thead>
);

const Item = ({
  secondary,
  id,
  title,
  created,
  assignee_id,
  reporter_id,
  status
}) => (
  <tr>
    <td>{id}</td>
    <td>
      <Link to={`/issues/${id}`}>{title}</Link>
    </td>
    <td>{status}</td>
    {!secondary && <td>{assignee_id}</td>}
    {!secondary && <td>{reporter_id}</td>}
    <td>{created && new Date(created * 1000).toLocaleDateString()}</td>
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

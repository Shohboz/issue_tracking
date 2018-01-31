import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import NoItems from "components/EmptyList";

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Название</th>
      <th>Статус</th>
      <th>Исполнитель</th>
      <th>Автор</th>
      <th>Дата создания</th>
      <th>Действия</th>
    </tr>
  </thead>
);

const EditButton = ({ id }) => (
  <Link to={`/issues/${id}`}>
    <div className="btn btn-default">
      <i className="glyphicon glyphicon-pencil" />
    </div>
  </Link>
);

const Item = ({ id, title, created, assignee_id, reporter_id, status }) => (
  <tr key={id}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{status}</td>
    <td>{assignee_id}</td>
    <td>{reporter_id}</td>
    <td>{created && new Date(created * 1000).toLocaleDateString()}</td>
    <td>
      <EditButton id={id} />
    </td>
  </tr>
);

const TableBody = ({ items }) => <tbody>{items.map(Item)}</tbody>;

export default ({ items }) => (
  <Panel.Body>
    <table className="table table-striped">
      {items.length ? (
        [
          <TableHeader key="issue-header" />,
          <TableBody items={items} key="issue-list" />
        ]
      ) : (
        <NoItems />
      )}
    </table>
  </Panel.Body>
);

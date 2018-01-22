import React from "react";
import { Link } from "react-router-dom";
import { Body as PanelBody } from "components/Panel";
import NoItems from "components/EmptyList";

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Название</th>
      <th>Статус</th>
      <th>Уполномоченный</th>
      <th>Докладчик</th>
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

const Item = ({ id, name, created, assignee, reporter, status }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{status}</td>
    <td>{assignee}</td>
    <td>{reporter}</td>
    <td>{created && new Date(created).toLocaleDateString()}</td>
    <td>
      <EditButton id={id} />
    </td>
  </tr>
);

const TableBody = ({ items }) => <tbody>{items.map(Item)}</tbody>;

export default ({ items }) => (
  <PanelBody>
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
  </PanelBody>
);

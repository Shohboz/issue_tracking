import React from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";
import NoItems from "components/EmptyList";

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Имя</th>
      <th>Логин</th>
      <th>Email</th>
      <th>Включен</th>
      <th>Роль</th>
    </tr>
  </thead>
);

const EditButton = ({ id }) => (
  <Link to={`/users/${id}`}>
    <div className="btn btn-default">
      <i className="glyphicon glyphicon-pencil" />
    </div>
  </Link>
);

const Item = ({ id, name, login, email, enable, role }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{login}</td>
    <td>{email}</td>
    <td>{`${enable}`}</td>
    <td>{role}</td>
    <td>
      <EditButton id={id} />
    </td>
  </tr>
);

const TableBody = ({ items }) => (
  <tbody>{items.map(item => <Item key={item.id} {...item} />)}</tbody>
);

export default ({ items }) => (
  <Panel.Body>
    <table className="table table-striped">
      {items.length ? (
        [
          <TableHeader key="users-header" />,
          <TableBody items={items} key="users-list" />
        ]
      ) : (
        <NoItems />
      )}
    </table>
  </Panel.Body>
);

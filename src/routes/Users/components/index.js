import React from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";
import NoItems from "components/EmptyList";

const DisableIcon = () => (
  <i className="text-danger glyphicon glyphicon-remove" title={"выключен"} />
);
const EnableIcon = () => (
  <i className="text-success glyphicon glyphicon-ok" title={"включен"} />
);

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

const Item = ({ id, name, login, email, enable, role }) => (
  <tr>
    <td>{id}</td>
    <td>
      <Link to={`/users/${id}`}>{name}</Link>
    </td>
    <td>{login}</td>
    <td>{email}</td>
    <td>{enable ? <EnableIcon /> : <DisableIcon />}</td>
    <td>{role}</td>
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

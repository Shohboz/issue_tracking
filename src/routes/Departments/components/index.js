import React from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";
import NoItems from "components/EmptyList";

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Название</th>
      <th>Дата создания</th>
    </tr>
  </thead>
);

const Item = ({ id, name, created }) => (
  <tr key={id}>
    <td>{id}</td>
    <td>
      <Link to={`/departments/${id}`}>{name}</Link>
    </td>
    <td>{created && new Date(created * 1000).toLocaleDateString()}</td>
  </tr>
);
const TableBody = ({ items }) => <tbody>{items.map(Item)}</tbody>;

export default ({ items }) => (
  <Panel.Body>
    <table className="table table-striped">
      {items.length ? (
        [
          <TableHeader key="projects-header" />,
          <TableBody items={items} key="projects-list" />
        ]
      ) : (
        <NoItems />
      )}
    </table>
  </Panel.Body>
);

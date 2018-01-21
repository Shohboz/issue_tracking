import React from "react";
import { Body as PanelBody } from "components/Panel";
import { Link } from "react-router-dom";

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Название</th>
      <th>Дата создания</th>
      <th>Действия</th>
    </tr>
  </thead>
);

const EditButton = ({ id }) => (
  <Link to={`/departments/${id}`}>
    <div className="btn btn-default">
      <i className="glyphicon glyphicon-pencil" />
    </div>
  </Link>
);

const Item = ({ id, name, created }) => (
  <tr key={id}>
    <td>{id}</td>
    <td>{name}</td>
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
      <TableHeader />
      <TableBody items={items} />
    </table>
  </PanelBody>
);

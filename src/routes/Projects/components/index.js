import React from "react";
import { Link } from "react-router-dom";
import { Body as PanelBody } from "components/Panel";
import NoItems from "components/EmptyList";

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
  <Link to={`/projects/${id}`}>
    <div className="btn btn-default">
      <i className="glyphicon glyphicon-pencil" />
    </div>
  </Link>
);

const Item = ({ id, name, created }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{created && new Date(created).toLocaleDateString()}</td>
    <td>
      <EditButton id={id} />
    </td>
  </tr>
);

const TableBody = ({ items }) => (
  <tbody>{items.map(item => <Item key={item.id} {...item} />)}</tbody>
);

export default ({ items }) => (
  <PanelBody>
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
  </PanelBody>
);

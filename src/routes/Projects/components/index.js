import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
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
  <tr>
    <td>{id}</td>
    <td>
      <Link to={`/projects/${id}`}>{name}</Link>
    </td>
    <td>{created && new Date(created * 1000).toLocaleDateString()}</td>
  </tr>
);

const TableBody = ({ items }) => (
  <tbody>{items.map(item => <Item key={item.id} {...item} />)}</tbody>
);

export default ({ items }) => (
  <Panel.Body>
    <div className="table-responsive">
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
    </div>
  </Panel.Body>
);

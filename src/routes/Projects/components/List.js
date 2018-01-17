import React from "react";
import { Link } from "react-router-dom";

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Дата создания</th>
      <th>Название</th>
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

const Project = ({ id, name, created }) => (
  <tr>
    <td>{id}</td>
    <td>{created && new Date(created).toLocaleDateString()}</td>
    <td>{name}</td>
    <td>
      <EditButton id={id} />
    </td>
  </tr>
);

const TableBody = ({ items }) => (
  <tbody>{items.map(item => <Project key={item.id} {...item} />)}</tbody>
);

const PanelBody = ({ children }) => (
  <div className="panel-body">
    <div className="row">
      <div className="col-sm-12">{children}</div>
    </div>
  </div>
);

const Items = ({ items }) => (
  <table className="table table-striped">
    <TableHeader />
    <TableBody items={items} />
  </table>
);

const NoItems = () => <div>Нет данных для отображения</div>;

export default ({ items }) => (
  <PanelBody>{items.length ? <Items items={items} /> : <NoItems />}</PanelBody>
);

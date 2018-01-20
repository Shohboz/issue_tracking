import React from "react";
import { Link } from "react-router-dom";
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

const Issue = ({ id, name, created, assignee, reporter, status }) => (
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

const TableBody = ({ items }) => (
  <tbody>{items.map(item => <Issue key={item.id} {...item} />)}</tbody>
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

export default ({ items }) => (
  <PanelBody>{items.length ? <Items items={items} /> : <NoItems />}</PanelBody>
);

import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import { toLocaleDateString } from "redux/helpers";
import NoItems from "components/EmptyList";
import { connect } from "react-redux";
import { changeDepartment } from "redux/department/actions";

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Название</th>
      <th>Дата создания</th>
    </tr>
  </thead>
);

const Item = ({ id, name, created, secondary, action }) => (
  <tr>
    <td>{id}</td>
    <td>
      {secondary && (
        <a className="vlink" onClick={() => action(id)}>
          {name}
        </a>
      )}
      {!secondary && <Link to={`/projects/${id}`}>{name}</Link>}
    </td>
    <td>{toLocaleDateString(created)}</td>
  </tr>
);

const TableBody = ({ items, secondary, action }) => (
  <tbody>
    {items.map(item => (
      <Item secondary={secondary} key={item.id} {...item} action={action} />
    ))}
  </tbody>
);

const Projects = ({ items, secondary, changeDepartment: action }) => (
  <Panel.Body>
    <div className="table-responsive">
      <table className="table table-striped">
        {items.length ? (
          [
            <TableHeader key="projects-header" />,
            <TableBody
              items={items}
              key="projects-list"
              secondary={secondary}
              action={action}
            />
          ]
        ) : (
          <NoItems />
        )}
      </table>
    </div>
  </Panel.Body>
);

export default connect(null, { changeDepartment })(Projects);

import React from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toLocaleDateString } from "redux/helpers";
import NoItems from "components/EmptyList";
import { connect } from "react-redux";
import { change, submit } from "redux-form";

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Название</th>
      <th>Дата создания</th>
    </tr>
  </thead>
);

const Item = ({ id, name, created, secondary, action, submit }) => (
  <tr>
    <td>{id}</td>
    <td>
      {secondary && (
        <a
          className="vlink"
          onClick={() => {
            action("searchIssueForm", "department_id", id);
            setTimeout(() => submit("searchIssueForm"));
          }}
        >
          {name}
        </a>
      )}
      {!secondary && <Link to={`/departments/${id}`}>{name}</Link>}
    </td>
    <td>{toLocaleDateString(created)}</td>
  </tr>
);
const TableBody = ({ items, secondary, action, submit }) => (
  <tbody>
    {items.map((item, idx) => (
      <Item
        secondary={secondary}
        key={idx}
        {...item}
        submit={submit}
        action={action}
      />
    ))}
  </tbody>
);

const Departments = ({ items, secondary, change: action, submit }) => (
  <Panel.Body>
    <div className="table-responsive">
      <table className="table table-striped">
        {items.length ? (
          [
            <TableHeader key="projects-header" />,
            <TableBody
              items={items}
              secondary={secondary}
              action={action}
              submit={submit}
              key="projects-list"
            />
          ]
        ) : (
          <NoItems />
        )}
      </table>
    </div>
  </Panel.Body>
);

export default connect(null, { change, submit })(Departments);

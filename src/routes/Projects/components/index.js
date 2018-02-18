import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
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
            action("searchIssueForm", "project_id", id);
            setTimeout(() => submit("searchIssueForm"));
          }}
        >
          {name}
        </a>
      )}
      {!secondary && <Link to={`/projects/${id}`}>{name}</Link>}
    </td>
    <td>{toLocaleDateString(created)}</td>
  </tr>
);

const TableBody = ({ items, secondary, action, submit }) => (
  <tbody>
    {items.map(item => (
      <Item
        secondary={secondary}
        key={item.id}
        {...item}
        submit={submit}
        action={action}
      />
    ))}
  </tbody>
);

const Projects = ({ items, secondary, change: action, submit }) => (
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
              submit={submit}
            />
          ]
        ) : (
          <NoItems />
        )}
      </table>
    </div>
  </Panel.Body>
);

export default connect(null, { change, submit })(Projects);

import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import { toLocaleDateString } from "redux/helpers";
import NoItems from "components/EmptyList";
import { connect } from "react-redux";
import { change, submit } from "redux-form";
import { components } from "components/ComposableList";
const { Enhanced, Sort } = components;

const SORTS_ASC_DESC = {
  ASC: <small><span className="glyphicon glyphicon-triangle-bottom" /></small>,
  DESC: <small><span className="glyphicon glyphicon-triangle-top" /></small>
};

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>
        <Sort sortKey={"name"} sortFn={x => x.name} suffix={SORTS_ASC_DESC}>
          Название
        </Sort>
      </th>
      <th>
        <Sort
          sortKey={"created"}
          sortFn={x => x.created}
          suffix={SORTS_ASC_DESC}
        >
          Дата создания
        </Sort>
      </th>
    </tr>
  </thead>
);

const Item = ({ id, name, created, secondary, action, submit }) => (
  <tr>
    <td>{id}</td>
    <td>
      {secondary &&
        <a
          className="vlink"
          onClick={() => {
            action("searchIssueForm", "project_id", id);
            setTimeout(() => submit("searchIssueForm"));
          }}
        >
          {name}
        </a>}
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

const Projects = ({ items, secondary, change: action, submit, uniqueKey }) => (
  <Panel.Body>
    <Enhanced uniqueKey={uniqueKey}>
      <div className="table-responsive">
        <table className="table table-striped">
          {items.length
            ? [
                <TableHeader key="projects-header" />,
                <TableBody
                  items={items}
                  key="projects-list"
                  secondary={secondary}
                  action={action}
                  submit={submit}
                />
              ]
            : <NoItems />}
        </table>
      </div>
    </Enhanced>
  </Panel.Body>
);

export default connect(null, { change, submit })(Projects);

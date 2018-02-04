import React from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { components } from "components/ComposableList";
const { Filter } = components;

const CreateButton = ({ title, link }) => (
  <Link to={link}>
    <div className="form-inline pull-right">
      <button className="btn btn-default btn-success" title={title}>
        <i className="glyphicon glyphicon-plus" />
      </button>
    </div>
  </Link>
);

export default ({
  searchBy,
  uniqueKey,
  placeholder,
  title,
  link,
  SearchExtension
}) => (
  <Panel.Body>
    <CreateButton title={title} link={link} />
    <Filter
      uniqueKey={uniqueKey}
      searchBy={searchBy}
      placeholder={placeholder}
      SearchExtension={SearchExtension}
    />
  </Panel.Body>
);

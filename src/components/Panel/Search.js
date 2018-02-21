import React from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { components } from "components/ComposableList";
import { connect } from "react-redux";
import { isAdmin } from "redux/selectors";
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

const Search = ({
  searchBy,
  uniqueKey,
  placeholder,
  title,
  link,
  SearchExtension,
  isAdmin
}) => (
  <Panel.Body>
    {isAdmin && <CreateButton title={title} link={link} />}
    <Filter
      uniqueKey={uniqueKey}
      searchBy={searchBy}
      placeholder={placeholder}
      SearchExtension={SearchExtension}
    />
  </Panel.Body>
);

export default connect(state => ({
  isAdmin: isAdmin(state)
}))(Search);

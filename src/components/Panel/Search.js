import React from "react";
import { Link } from "react-router-dom";
import { Body as PanelBody } from "components/Panel";
import { components } from "components/ComposableList";
const { Filter } = components;

const CreateButton = ({ title, link }) => (
  <Link to={link}>
    <div className="form-inline pull-right">
      <button className="btn btn-default" title={title}>
        <i className="glyphicon glyphicon-plus" />
      </button>
    </div>
  </Link>
);

export default ({ searchBy, uniqueKey, placeholder, title, link }) => (
  <PanelBody>
    <CreateButton title={title} link={link} />
    <Filter
      uniqueKey={uniqueKey}
      searchBy={searchBy}
      placeholder={placeholder}
    />
  </PanelBody>
);

import React from "react";
import { Link } from "react-router-dom";
import { Body as PanelBody } from "components/Panel";
import { components } from "components/ComposableList";
const { Filter } = components;

const CreateButton = () => (
  <Link to={"/departments/new"}>
    <div className="form-inline pull-right">
      <button className="btn btn-default" title="Добавить департамент">
        <i className="glyphicon glyphicon-plus" />
      </button>
    </div>
  </Link>
);

export default () => (
  <PanelBody>
    <CreateButton />
    <Filter
      uniqueKey={"departments"}
      searchBy={["name"]}
      placeholder={"Поиск по названию департамента"}
    />
  </PanelBody>
);

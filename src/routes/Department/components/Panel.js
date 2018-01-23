import React from "react";
import { Body as PanelBody } from "components/Panel";
import Form from "../containers/Form";
import { Grid } from "react-bootstrap";

export default ({ data }) => (
  <Grid>
    <div className="panel panel-default">
      <div className="panel-heading">Форма создания отдела</div>
      <PanelBody>
        <Form data={data} />
      </PanelBody>
    </div>
  </Grid>
);

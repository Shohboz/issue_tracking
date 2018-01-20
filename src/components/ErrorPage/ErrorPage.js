import React from "react";
import "./ErrorPage.css";
import { Col, Row } from "react-bootstrap";

export default ({ errors }) => (
  <div className="panel panel-default">
    <div className="panel-heading" />
    <div className="panel-body">
      <Row>
        <Col xs={12} md={12}>
          <div className="error-template">
            <h1>Упс!</h1>
            <h2>Что-то пошло не так</h2>
            <div className="error-details">{errors.message}</div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

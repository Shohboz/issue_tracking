import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => (
  <Navbar fluid={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={"/"}>issue tracking</Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

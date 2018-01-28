import React from "react";
import { NavItem as OriginalNavItem } from "react-bootstrap";
import { history } from "redux/configureStore";

export default ({ href, ...props }) => (
  <OriginalNavItem
    onClick={e => {
      e.preventDefault();
      history.push(href);
    }}
    href={href}
    {...props}
  />
);

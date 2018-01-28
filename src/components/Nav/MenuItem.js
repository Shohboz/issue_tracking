import React from "react";
import { MenuItem as OriginalMenuItem } from "react-bootstrap";
import { history } from "redux/configureStore";

export default ({ href, ...props }) => (
  <OriginalMenuItem
    onClick={e => {
      e.preventDefault();
      history.push(href);
    }}
    href={href}
    {...props}
  />
);

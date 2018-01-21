import React from "react";

export default ({ title, disabled, onClick, active }) => (
  <li className={`${disabled ? "disabled" : ""} ${active ? "active" : ""}`}>
    <a onClick={onClick}>
      <span aria-hidden="true">{title}</span>
    </a>
  </li>
);

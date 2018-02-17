import React from "react";

export default ({ filename, path }) => (
  <li>
    <a href={`/api/public${path}`} target="_blank">
      {filename}
    </a>
  </li>
);

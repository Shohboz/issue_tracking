import React from "react";

const takeSuffix = (suffix, isReverse) =>
  isReverse ? suffix["DESC"] : suffix["ASC"];

export default ({ suffix, isActive, isReverse }) => (
  <span>
    {suffix && isActive ? takeSuffix(suffix, isReverse) : null}
  </span>
);

import PropTypes from "prop-types";
import React from "react";
import "./Sort.css";

import SortCaret from "./SortCaret";

const Sort = ({ isActive, isReverse, onSort, suffix, children }) => {
  const linkClass = ["composable-list-sort"];
  if (isActive) {
    linkClass.push("composable-list-sort-active");
  }

  return (
    <div>
      <a onClick={onSort} className={linkClass.join(" ")}>
        {children}
        &nbsp;
        <SortCaret suffix={suffix} isActive={isActive} isReverse={isReverse} />
      </a>
    </div>
  );
};

Sort.propTypes = {
  isActive: PropTypes.bool,
  isReverse: PropTypes.bool,
  onSort: PropTypes.func,
  children: PropTypes.node
};

export default Sort;

import React from "react";
import Navigation from "./Navigation";

export default ({ items, onPageChange, pageCount, current }) => (
  <ul className="pagination">
    <Navigation
      title={<span>&#x27EA;</span>}
      disabled={current === 0}
      onClick={e => {
        e.preventDefault();
        onPageChange(0);
      }}
    />
    <Navigation
      title={<span>&#x27E8;</span>}
      disabled={current === 0}
      onClick={e => {
        e.preventDefault();
        if (current) {
          onPageChange(current - 1);
        }
      }}
    />
    {items.map(i => (
      <Navigation
        key={i}
        title={i + 1}
        active={i === current}
        onClick={e => {
          e.preventDefault();
          onPageChange(i);
        }}
      />
    ))}
    <Navigation
      title={<span>&#x27E9;</span>}
      disabled={current === pageCount - 1}
      onClick={e => {
        e.preventDefault();
        if (current !== pageCount - 1) {
          onPageChange(current + 1);
        }
      }}
    />
    <Navigation
      title={<span>&#x27EB;</span>}
      disabled={current === pageCount - 1}
      onClick={e => {
        e.preventDefault();
        onPageChange(pageCount - 1);
      }}
    />
  </ul>
);

import React from "react";
import "./Preloader.css";

const styles = {
  Container: {
    display: "flex",
    alignItems: "center"
  }
};

export default ({ width = 50, height = 50, minHeight = 600 }) => (
  <div style={{ ...styles.Container, minHeight }}>
    <div className="loader" style={{ width, height }} />
  </div>
);

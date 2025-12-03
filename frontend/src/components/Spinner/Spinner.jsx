import React from "react";
import styles from "./Spinner.module.css";

const Spinner = ({ size = 20, color = "#007bff" }) => {
  return (
    <div
      className={styles.spinner}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `${Math.round(size / 6)}px solid rgba(0,123,255,0.3)`,
        borderTopColor: color,
      }}
    />
  );
};

export default Spinner;

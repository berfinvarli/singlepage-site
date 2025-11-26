import React from "react";

const Spinner = ({ size = 20, color = "#007bff" }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `${Math.round(size / 6)}px solid rgba(0,123,255,0.3)`,
        borderTopColor: color,
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }}
    />
  );
};

export default Spinner;

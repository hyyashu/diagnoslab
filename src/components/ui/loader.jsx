"use client";

import React from "react";
import { DNA } from "react-loader-spinner";

const Loader = ({
  visible,
  height = 80,
  width = 80,
  ariaLabel = "DNA-loading",
  wrapperClass = "",
  wrapperStyle = {},
}) => {
  if (!visible) return null;

  return (
    <div
      className={`flex justify-center items-center ${wrapperClass}`}
      style={wrapperStyle}
    >
      <DNA
        visible={visible}
        height={height}
        width={width}
        ariaLabel={ariaLabel}
      />
    </div>
  );
};

export default Loader;

import React, { ReactElement } from "react";

const Button: React.FC<{ children: string }> = ({ children }): ReactElement => {
  return (
    <button
      type="button"
      className="font-tahoma text-[11px] px-2 py-1 active:outline-1"
      style={{
        boxSizing: "border-box",
        border: "1px solid #003c74",
        background:
          "linear-gradient( 180deg, rgba(255, 255, 255, 1) 0%, rgba(236, 235, 229, 1) 86%, rgba(216, 208, 196, 1) 100%)",
        boxShadow: "none",
        borderRadius: "3px",
      }}
    >
      {children}
    </button>
  );
};

export default Button;

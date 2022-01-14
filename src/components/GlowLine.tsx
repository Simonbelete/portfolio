import React, { ReactElement } from "react";

const GlowLine: React.FC<{ colors: String[] }> = ({ colors }): ReactElement => {
  return (
    <div
      className="w-full h-[2px] border-0"
      style={{
        background: `linear-gradient(to right, ${colors.join(",")})`,
      }}
    />
  );
};

export default GlowLine;

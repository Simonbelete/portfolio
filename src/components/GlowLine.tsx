import React, { ReactElement } from "react";

const GlowLine: React.FC<{ colors: String[] }> = ({ colors }): ReactElement => {
  return (
    <hr
      className="w-full h-1"
      style={{
        background: `linear-gradient(to right, ${colors.join(",")})`,
      }}
    />
  );
};

export default GlowLine;

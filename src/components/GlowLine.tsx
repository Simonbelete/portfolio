import React, { ReactElement } from "react";

const GlowLine: React.FC<{ colors: String[]; horizontal?: boolean }> = ({
  colors,
  horizontal = false,
}): ReactElement => {
  if (horizontal)
    return (
      <div
        className="h-full w-[2px] border-0"
        style={{
          background: `linear-gradient(to bottom, ${colors.join(",")})`,
        }}
      />
    );
  else
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

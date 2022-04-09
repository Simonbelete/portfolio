import React, { ReactElement } from "react";

const Link: React.FC<{ children: string; onClick?: () => void }> = ({
  children,
  onClick,
}): ReactElement => {
  return (
    <span
      className="text-[#316AC5] hover:text-[#428EFF] underline"
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Link;

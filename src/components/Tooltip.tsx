import React, { ReactElement } from "react";

const Tooltip: React.FC<{ children: ReactElement }> = ({
  children,
}): ReactElement => {
  return (
    <div className="absolute left-0 top-0">
      <div />
      <div>{children}</div>
    </div>
  );
};

export default Tooltip;

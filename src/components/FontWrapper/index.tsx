import React, { ReactElement } from "react";

const FontWrapper: React.FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}): ReactElement => {
  return (
    <div style={{ fontFamily: "tahoma", fontWeight: 400 }}>{children}</div>
  );
};

export default FontWrapper;

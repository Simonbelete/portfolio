import React, { ReactElement } from "react";

const RightClickMenu: React.FC<{
  show?: boolean;
  xPos: string;
  yPos: string;
}> = ({ show = false, xPos, yPos }): ReactElement => {
  return (
    <>
      {show && (
        <div
          className="absolute"
          style={{
            top: yPos,
            left: xPos,
          }}
        >
          Menu
        </div>
      )}
    </>
  );
};

export default RightClickMenu;

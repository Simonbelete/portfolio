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
          className="absolute bg-white px-2 py-2"
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

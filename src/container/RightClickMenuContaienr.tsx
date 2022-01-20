import React, { ReactElement } from "react";
import { RightClickMenu } from "components";
import { useContextMenu } from "hooks";

const RightClickMenuContainer: React.FC = (): ReactElement => {
  const { xPos, yPos, showMenu } = useContextMenu();
  return <RightClickMenu xPos={xPos} yPos={yPos} show={showMenu} />;
};

export default RightClickMenuContainer;

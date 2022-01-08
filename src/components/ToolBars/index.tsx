import React, { ReactElement } from "react";
import { ToolBarMenus } from "components";

const ToolBars: React.FC = (): ReactElement => {
  return (
    <div className="bg-[#f2efe3] h-full w-full">
      <ToolBarMenus />
    </div>
  );
};

export default ToolBars;

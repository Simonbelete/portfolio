import React, { ReactElement } from "react";
import { ToolBarFileMenu } from "components";

const ToolBarMenus: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-row gap-2">
      <ToolBarFileMenu />
    </div>
  );
};

export default ToolBarMenus;

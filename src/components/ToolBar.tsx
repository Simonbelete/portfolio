import React, { ReactElement } from "react";
import { ToolBarFileMenu } from "components";

const ToolBar: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-row gap-2">
      <ToolBarFileMenu />
    </div>
  );
};

export default ToolBar;

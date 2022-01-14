import React, { ReactElement } from "react";
import { WindowsLogoFull } from "components";

const LogOffText: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col place-items-end gap-3">
      <WindowsLogoFull size="150" />
      <p className="text-lg text-white mr-7">To begin, click your user name</p>
    </div>
  );
};

export default LogOffText;

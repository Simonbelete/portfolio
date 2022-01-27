import React, { ReactElement } from "react";
import { Icon } from "components";

const LeftStartMenus: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <Icon
        iconUrl="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-220.ico"
        description="Internet Explore"
      >
        Internet
      </Icon>
    </div>
  );
};

export default LeftStartMenus;

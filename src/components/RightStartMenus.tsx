import React, { ReactElement } from "react";
import { Icon } from "components";

const RightStartMenus: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-2">
      <Icon iconUrl="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-126.ico">
        My Documnets
      </Icon>
      <Icon iconUrl="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-127.ico">
        My Pictures
      </Icon>
      <Icon iconUrl="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-128.ico">
        My Musics
      </Icon>
      <hr />
      <Icon iconUrl="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-057.ico">
        Control Panel
      </Icon>
      <hr />
      <Icon iconUrl="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-022.ico">
        Search
      </Icon>
      <Icon iconUrl="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-024.ico">
        Run
      </Icon>
    </div>
  );
};

export default RightStartMenus;

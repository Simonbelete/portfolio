import React, { ReactElement } from "react";
import { Window, BackButton, UserHomeIcon, WindowTitle } from "components";
import NextButton from "./NextButton";
import { useScreenSize } from "hooks";

const UserAccountWindowToolBar: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-row gap-3 py-1 px-2">
      <BackButton />
      <NextButton disabled />
      <UserHomeIcon />
    </div>
  );
};

const UserAccountWindow: React.FC = (): ReactElement => {
  const { width, height } = useScreenSize();
  return (
    <Window
      toolBar={<UserAccountWindowToolBar />}
      width={width / 2.5}
      height={height / 2}
      title={
        <WindowTitle iconUrl="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-160.ico">
          User Accounts
        </WindowTitle>
      }
    >
      <div className="grid grid-cols-12 w-full h-auto">
        {/* Left */}
        <div className="h-full w-full col-span-4 bg-[#6C85DC]"></div>
        {/* Right */}
        <div className="h-full w-full col-span-8 bg-white"></div>
      </div>
    </Window>
  );
};

export default UserAccountWindow;

import React, { ReactElement } from "react";
import {
  Window,
  BackButton,
  UserHomeIcon,
  WindowTitle,
  List,
} from "components";
import NextButton from "./NextButton";
import { useScreenSize } from "hooks";

const UserAccountWindowToolBar: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-row gap-3 py-1 px-2 cursor-xp">
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
      <div className="flex flex-row w-full h-auto">
        {/* Left */}
        <div className="h-full w-[300px] bg-[#6C85DC] hidden md:flex justify-center">
          <div className="mx-2 my-5 w-full">
            <List>
              <List.Title>Current Picture</List.Title>
              <List.Item>Test</List.Item>
            </List>
          </div>
        </div>
        {/* Right */}
        <div className="h-full w-full bg-white"></div>
      </div>
    </Window>
  );
};

export default UserAccountWindow;

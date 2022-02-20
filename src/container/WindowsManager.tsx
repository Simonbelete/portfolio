import React, { ReactElement } from "react";
import { GrettingWindow, BrowserWindow } from "components/windows";
import { OnScreenKeyboard } from "components/apps";

const WindowsManager: React.FC = (): ReactElement => {
  return (
    <>
      <GrettingWindow />
      <OnScreenKeyboard />
      <BrowserWindow />
    </>
  );
};

export default WindowsManager;

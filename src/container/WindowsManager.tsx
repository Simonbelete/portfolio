import React, { ReactElement } from "react";
import { GrettingWindow } from "components/windows";
import { OnScreenKeyboard } from "components/apps";

const WindowsManager: React.FC = (): ReactElement => {
  return (
    <>
      <GrettingWindow />
      <OnScreenKeyboard />
    </>
  );
};

export default WindowsManager;

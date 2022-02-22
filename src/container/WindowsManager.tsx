import React, { ReactElement } from "react";
import {
  GrettingWindow,
  BrowserWindow,
  PhoneNumberWindow,
} from "components/windows";
import { OnScreenKeyboard } from "components/apps";

const WindowsManager: React.FC = (): ReactElement => {
  return (
    <>
      {/* <GrettingWindow /> */}
      <PhoneNumberWindow />
      {/* <OnScreenKeyboard /> */}
      {/* <BrowserWindow /> */}
    </>
  );
};

export default WindowsManager;

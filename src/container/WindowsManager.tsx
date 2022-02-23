import React, { ReactElement } from "react";
import { useAppSelector } from "hooks";
import { Types } from "rootSlice";
import { GrettingWindow, PhoneNumberWindow } from "components/windows";

const WindowsManager: React.FC = (): ReactElement => {
  const windowsList = useAppSelector((state) => state.RootReducer.windows);
  return (
    <>
      {windowsList.map((_) => {
        if (_.type === Types.WELCOME_WINDOW && _.minimized === false)
          return <GrettingWindow />;
        if (_.type === Types.PHONE_NUMBER_WINDOW && _.minimized === false)
          return <PhoneNumberWindow />;
      })}
    </>
  );
};

export default WindowsManager;

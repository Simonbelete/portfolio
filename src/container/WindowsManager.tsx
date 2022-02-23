import React, { ReactElement } from "react";
import { GrettingWindow } from "components/windows";
import { useAppSelector } from "hooks";
import { Types } from "rootSlice";

const WindowsManager: React.FC = (): ReactElement => {
  const windowsList = useAppSelector((state) => state.RootReducer.windows);
  return (
    <>
      {windowsList.map((_) => {
        if (_.type === Types.WELCOME_WINDOW && _.minimized === false)
          return <GrettingWindow />;
      })}
    </>
  );
};

export default WindowsManager;

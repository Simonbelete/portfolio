import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { Window, WelcomeWindow, UserAccountWindow } from "components";
import { Types } from "rootSlice";

const WindowsManager: React.FC = (): ReactElement => {
  const windowsList = useAppSelector((state) => state.RootReducer.windows);
  return (
    <>
      {windowsList.map((_) => {
        switch (_.type) {
          case Types.WELCOME_WINDOW:
            return <WelcomeWindow />;
          case Types.USER_ACCOUNT_WINDOW:
            return <UserAccountWindow />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default WindowsManager;

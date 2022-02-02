import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { Window, WelcomeWindow } from "components";
import { Types } from "rootSlice";

const WindowsManager: React.FC = (): ReactElement => {
  const windowsList = useAppSelector((state) => state.RootReducer.windows);
  return (
    <>
      <WelcomeWindow />
      {/* {windowsList.map((_) => (
        <Window type={Types.FOLDER} />
      ))} */}
    </>
  );
};

export default WindowsManager;

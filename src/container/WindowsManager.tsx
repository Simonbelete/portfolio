import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { minimizeWindow, maximizeWindow, removeWindow } from "rootSlice";
import { WINDOWS } from "components/windows";

const WindowsManager: React.FC = (): ReactElement => {
  const windowsList = useAppSelector((state) => state.RootReducer.windows);
  const dispatch = useAppDispatch();
  const handleOnMinimize = (i: number) => {
    dispatch(minimizeWindow(i));
  };
  const handleOnMaximize = (i: number) => {
    dispatch(maximizeWindow(i));
  };
  const handleOnClose = (i: number) => {
    dispatch(removeWindow(i));
  };
  return (
    <>
      {windowsList.length > 0 &&
        windowsList.map((_, i) => {
          if (_.minimized === false && WINDOWS[i])
            return WINDOWS[i].component({
              key: i,
              onMinimize: () => handleOnMinimize(i),
              onMaximize: () => handleOnMaximize(i),
              onClose: () => handleOnClose(i),
            });
          return null;
        })}
    </>
  );
};

export default WindowsManager;

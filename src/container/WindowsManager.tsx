import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  minimizeWindow,
  maximizeWindow,
  removeWindow,
  setActiveWindow,
} from "rootSlice";
import { WINDOWS } from "components/windows";

const WindowsManager: React.FC = (): ReactElement => {
  const windowsList = useAppSelector((state) => state.RootReducer.windows);
  const { activeWindow, windowsSequence } = useAppSelector(
    (state) => state.RootReducer
  );
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
  const handleActiveWindow = (i: number) => {
    dispatch(setActiveWindow(i));
    // dispatch(moveWindowToTop(i));
  };
  return (
    <>
      {windowsList.length > 0 &&
        windowsList.map((_, i) => {
          if (_.minimized === false && WINDOWS[i]) {
            const c = WINDOWS.find((x) => x.id === _.id);
            return c?.component({
              key: i,
              onMinimize: () => handleOnMinimize(i),
              onMaximize: () => handleOnMaximize(i),
              onClose: () => handleOnClose(i),
              onClick: () => handleActiveWindow(i),
              zIndex: () => {
                return windowsSequence.findIndex((e) => e === i) + 3;
              },
            });
          }
          return null;
        })}
    </>
  );
};

export default WindowsManager;

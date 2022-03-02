import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { Types, minimizeWindow, maximizeWindow, removeWindow } from "rootSlice";
import {
  GrettingWindow,
  PhoneNumberWindow,
  BrowserWindow,
  GithubWindow,
  WorksWindow,
} from "components/windows";

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
      {console.log(windowsList.length)}
      {windowsList.length > 0 &&
        windowsList.map((_, i) => {
          if (_.minimized === false)
            return (
              <_.component
                onMinimize={() => handleOnMinimize(i)}
                onMaximize={() => handleOnMaximize(i)}
                onClose={() => handleOnClose(i)}
              />
            );
          return null;
        })}
    </>
  );
  // return (
  //   <>
  //     {windowsList.map((_) => {
  //       if (_.type === Types.WELCOME_WINDOW && _.minimized === false)
  //         return (
  //           <GrettingWindow
  //             onMinimize={() => handleOnMinimize(Types.WELCOME_WINDOW)}
  //             onMaximize={() => handleOnMaximize(Types.WELCOME_WINDOW)}
  //             onClose={() => handleOnClose(Types.WELCOME_WINDOW)}
  //           />
  //         );
  //       if (_.type === Types.PHONE_NUMBER_WINDOW && _.minimized === false)
  //         return (
  //           <PhoneNumberWindow
  //             onMinimize={() => handleOnMinimize(Types.PHONE_NUMBER_WINDOW)}
  //             onMaximize={() => handleOnMaximize(Types.PHONE_NUMBER_WINDOW)}
  //             onClose={() => handleOnClose(Types.PHONE_NUMBER_WINDOW)}
  //           />
  //         );
  //       if (_.type === Types.BROWSER_WINDOW && _.minimized === false)
  //         return (
  //           <BrowserWindow
  //             onMinimize={() => handleOnMinimize(Types.BROWSER_WINDOW)}
  //             onMaximize={() => handleOnMaximize(Types.BROWSER_WINDOW)}
  //             onClose={() => handleOnClose(Types.BROWSER_WINDOW)}
  //           />
  //         );
  //       if (_.type === Types.GITHUB_WINDOW && _.minimized === false)
  //         return (
  //           <GithubWindow
  //             onMinimize={() => handleOnMinimize(Types.GITHUB_WINDOW)}
  //             onMaximize={() => handleOnMaximize(Types.GITHUB_WINDOW)}
  //             onClose={() => handleOnClose(Types.GITHUB_WINDOW)}
  //           />
  //         );
  //       if (_.type === Types.WORKS_WINDOW && _.minimized === false)
  //         return (
  //           <WorksWindow
  //             onMinimize={() => handleOnMinimize(Types.WORKS_WINDOW)}
  //             onMaximize={() => handleOnMaximize(Types.WORKS_WINDOW)}
  //             onClose={() => handleOnClose(Types.WORKS_WINDOW)}
  //           />
  //         );
  //     })}
  //   </>
  // );
};

export default WindowsManager;

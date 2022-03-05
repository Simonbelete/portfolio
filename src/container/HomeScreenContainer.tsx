import React, { ReactElement } from "react";
import { HomeScreen } from "components/screens";
import { useAppDispatch, useAppSelector } from "hooks";
import { WindowsManager, DesktopContainer } from "container";
import { maximizeWindow } from "rootSlice";

const HomeScreenContaienr: React.FC = (): ReactElement => {
  const { windows } = useAppSelector((state) => state.RootReducer);
  const dispatch = useAppDispatch();
  const toggleTaskBarWindow = (i: number) => {
    dispatch(maximizeWindow(i));
  };

  return (
    <HomeScreen windows={windows} onTaskBarWindowToggle={toggleTaskBarWindow}>
      <DesktopContainer />
      <WindowsManager />
    </HomeScreen>
  );
};

export default HomeScreenContaienr;

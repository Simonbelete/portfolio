import React, { ReactElement } from "react";
import { HomeScreen } from "components/screens";
import { useAppSelector } from "hooks";
import { WindowsManager, DesktopContainer } from "container";
import { Types } from "rootSlice";

const HomeScreenContaienr: React.FC = (): ReactElement => {
  const { windows } = useAppSelector((state) => state.RootReducer);
  const toggleTaskBarWindow = (type: Types) => {
    console.log(type);
  };

  return (
    <HomeScreen windows={windows} onTaskBarWindowToggle={toggleTaskBarWindow}>
      <DesktopContainer />
      <WindowsManager />
    </HomeScreen>
  );
};

export default HomeScreenContaienr;

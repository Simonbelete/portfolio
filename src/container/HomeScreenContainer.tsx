import React, { ReactElement } from "react";
import { HomeScreen } from "components/screens";
import { useAppSelector } from "hooks";
import { WindowsManager, DesktopContainer } from "container";

const HomeScreenContaienr: React.FC = (): ReactElement => {
  const { windows } = useAppSelector((state) => state.RootReducer);

  return (
    <HomeScreen windows={windows}>
      <DesktopContainer />
      <WindowsManager />
    </HomeScreen>
  );
};

export default HomeScreenContaienr;

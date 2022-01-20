import React, { ReactElement } from "react";
import { HomeScreen } from "components/screens";
import { useAppSelector } from "hooks";
import {
  RightClickMenuContainer,
  StartBarContainer,
  DesktopContainer,
} from "container";

const HomeScreenContaienr: React.FC = (): ReactElement => {
  const { background } = useAppSelector((state) => state.RootReducer);

  return (
    <HomeScreen background={background} footer={<StartBarContainer />}>
      <RightClickMenuContainer />
      <DesktopContainer />
    </HomeScreen>
  );
};

export default HomeScreenContaienr;

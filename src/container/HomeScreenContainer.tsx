import React, { ReactElement } from "react";
import { HomeScreen } from "components/screens";
// import { useAppSelector } from "hooks";
// import {
//   RightClickMenuContainer,
//   StartBarContainer,
//   DesktopContainer,
//   WindowsManager,
// } from "container";
import { Icon } from "components";

const HomeScreenContaienr: React.FC = (): ReactElement => {
  // const { background } = useAppSelector((state) => state.RootReducer);

  // return (
  //   <HomeScreen background={background} footer={<StartBarContainer />}>
  //     {/* <RightClickMenuContainer /> */}
  //     <DesktopContainer />
  //     <WindowsManager />
  //   </HomeScreen>
  // );

  return (
    <HomeScreen>
      <Icon.Folder />
    </HomeScreen>
  );
};

export default HomeScreenContaienr;

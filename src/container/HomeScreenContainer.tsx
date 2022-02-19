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
import WindowsManager from "./WindowsManager";
import Draggable from "react-draggable";

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
      <Icon.Folder dragable={true} />
      <Draggable
        bounds="parent"
        handle=".handle"
        defaultPosition={{ x: 10, y: 0 }}
      >
        <div className="handle inline-flex">Drag Me</div>
      </Draggable>
      <WindowsManager />
    </HomeScreen>
  );
};

export default HomeScreenContaienr;

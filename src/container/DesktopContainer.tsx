import React, { ReactElement } from "react";
import { useAppSelector } from "hooks";
import { Icon } from "components";

const DesktopContainer: React.FC = (): ReactElement => {
  // const desktopsList = useAppSelector((state) => state.RootReducer.desktops);
  return (
    <>
      <Icon.Folder dragable={true} x={10}>
        New Folder
      </Icon.Folder>
      <Icon.Github dragable={true} x={0} y={70}>
        Github (Simonbelete)
      </Icon.Github>
    </>
  );
};

export default DesktopContainer;

import React, { ReactElement } from "react";
import { useAppSelector } from "hooks";
import { Icon } from "components";

const DesktopContainer: React.FC = (): ReactElement => {
  // const desktopsList = useAppSelector((state) => state.RootReducer.desktops);
  return (
    <>
      <Icon.Folder dragable={true}>New Folder</Icon.Folder>
      <Icon.Github dragable={true} x={0} y={70}>
        Github (Simonbelete)
      </Icon.Github>
      <Icon.RecycleBin dragable={true} y={160}>
        Recycle Bin
      </Icon.RecycleBin>
      <Icon.MyDocument dragable={true} y={230}>
        My Portfolio
      </Icon.MyDocument>
      <a href="tel:+251966751230">
        <Icon.Phone dragable={true} y={300}>
          Phone Number
        </Icon.Phone>
      </a>
    </>
  );
};

export default DesktopContainer;

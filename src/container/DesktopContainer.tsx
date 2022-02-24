import React, { ReactElement, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { Icon, RightClickMenu } from "components";
import { addWindow, Types, Windows } from "rootSlice";

const DesktopContainer: React.FC = (): ReactElement => {
  // const desktopsList = useAppSelector((state) => state.RootReducer.desktops);
  const dispatch = useAppDispatch();
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);
  const handleOnClick = (
    e: any,
    xPos: string,
    yPos: string,
    showMenu: boolean,
    type?: string
  ) => {
    setXPos(xPos);
    setYPos(yPos);
    setShowMenu(showMenu);
    console.log(type);
    if (e.detail === 2) {
      switch (type) {
        case "PHONE":
          dispatch(
            addWindow({
              type: Types.PHONE_NUMBER_WINDOW,
              minimized: false,
            })
          );
      }
    }
  };

  return (
    <>
      <RightClickMenu.Folder x={xPos} y={yPos} show={showMenu} />
      <Icon.Folder onClick={handleOnClick} dragable={true}>
        New Folder
      </Icon.Folder>
      <Icon.Github onClick={handleOnClick} dragable={true} y={70}>
        Github (Simonbelete)
      </Icon.Github>
      <Icon.RecycleBin onClick={handleOnClick} dragable={true} y={160}>
        Recycle Bin
      </Icon.RecycleBin>
      <Icon.MyDocument onClick={handleOnClick} dragable={true} y={230}>
        My Portfolio
      </Icon.MyDocument>
      {/* <a href="tel:+251966751230"> */}
      <Icon.Phone onClick={handleOnClick} dragable={true} y={300}>
        Phone Number
      </Icon.Phone>
      {/* </a> */}
    </>
  );
};

export default DesktopContainer;

import React, { ReactElement, useState } from "react";
import { useAppDispatch, useScreenSize } from "hooks";
import { Icon, RightClickMenu } from "components";
import { addWindow } from "rootSlice";

const DesktopContainer: React.FC = (): ReactElement => {
  // const desktopsList = useAppSelector((state) => state.RootReducer.desktops);
  const dispatch = useAppDispatch();
  const { height, width } = useScreenSize();
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);
  const handleOnClick = (
    e: any,
    xPos: string,
    yPos: string,
    showMenu: boolean,
    id?: number
  ) => {
    setXPos(xPos);
    setYPos(yPos);
    setShowMenu(showMenu);
    if (e.detail === 2 || (e.detail === 1 && width < 425)) {
      if (id !== undefined) {
        dispatch(addWindow(id));
      }
    }
  };

  const autoArrange = (i: number) => {
    return { x: 0, y: i * 75 };
  };

  return (
    <>
      {/* Body Right click menu */}
      <RightClickMenu.Folder x={xPos} y={yPos} show={showMenu} />
      <Icon.MyWorks onClick={handleOnClick} dragable={true} {...autoArrange(0)}>
        My Portfolio
      </Icon.MyWorks>
      <Icon.Github onClick={handleOnClick} dragable={true} {...autoArrange(1)}>
        Github (Simonbelete)
      </Icon.Github>
      <Icon.Phone onClick={handleOnClick} dragable={true} {...autoArrange(2)}>
        Phone Number
      </Icon.Phone>
      <Icon.Folder onClick={handleOnClick} dragable={true} {...autoArrange(3)}>
        New Folder
      </Icon.Folder>
      <Icon.RecycleBin
        onClick={handleOnClick}
        dragable={true}
        {...autoArrange(4)}
      >
        Recycle Bin
      </Icon.RecycleBin>
    </>
  );
};

export default DesktopContainer;

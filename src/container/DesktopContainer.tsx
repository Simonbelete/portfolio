import React, { ReactElement } from "react";
import { useAppSelector } from "hooks";
import { DesktopIcon } from "components";

const DesktopContainer: React.FC = (): ReactElement => {
  const desktopsList = useAppSelector((state) => state.RootReducer.desktops);
  return (
    <>
      {desktopsList.map((_) => (
        <DesktopIcon iconUrl={_.iconUrl} x={_.x} y={_.y}>
          {_.name}
        </DesktopIcon>
      ))}
    </>
  );
};

export default DesktopContainer;

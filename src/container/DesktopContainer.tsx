import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { DesktopType } from "rootSlice";
import { Folder } from "components";

const DesktopContainer: React.FC = (): ReactElement => {
  const desktopsList = useAppSelector((state) => state.RootReducer.desktops);
  return (
    <>
      {desktopsList.map((_) =>
        _.type === DesktopType.FOLDER ? <Folder /> : <p>{_.name}</p>
      )}
    </>
  );
};

export default DesktopContainer;

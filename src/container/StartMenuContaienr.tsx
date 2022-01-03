import React, { ReactElement } from "react";
import { StartMenu } from "components";
import { useAppSelector } from "hooks";

const StartMenuContaienr: React.FC = (): ReactElement => {
  const show = useAppSelector((state) => state.RootReducer.isStartMenuOpen);
  return <StartMenu display={show} />;
};

export default StartMenuContaienr;

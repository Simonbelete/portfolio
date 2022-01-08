import React, { ReactElement } from "react";
import { StartMenu } from "components";
import { useAppSelector } from "hooks";

const StartMenuContaienr: React.FC = (): ReactElement => {
  const show = false;
  return <StartMenu display={show} />;
};

export default StartMenuContaienr;

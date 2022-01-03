import React, { ReactElement } from "react";
import { StartBar } from "components";

const StartBarContainer: React.FC = (): ReactElement => {
  const onStartMenuClick = () => {};
  return <StartBar onClick={() => onStartMenuClick} />;
};

export default StartBarContainer;

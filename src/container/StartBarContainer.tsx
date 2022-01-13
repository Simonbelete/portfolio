import React, { ReactElement } from "react";
import { StartBar } from "components";
import { UserAccountIconContainer } from "container";

const StartBarContainer: React.FC = (): ReactElement => {
  return <StartBar user={<UserAccountIconContainer />} />;
};

export default StartBarContainer;

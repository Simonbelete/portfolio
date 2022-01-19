import React, { ReactElement, useEffect, useState } from "react";
import { useGaTracker } from "hooks";
import { BootingScreen } from "components/screens";
import { WindowsBooting } from "components";

const App: React.FC = (): ReactElement => {
  // Init ga tracker
  useGaTracker();

  return <BootingScreen />;
};

export default App;

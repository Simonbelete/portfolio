import React, { ReactElement, useEffect, useState } from "react";
import { useGaTracker } from "hooks";
import { PowerOffScreen } from "components/screens";

const App: React.FC = (): ReactElement => {
  // Init ga tracker
  useGaTracker();

  return <PowerOffScreen />;
};

export default App;

import React, { ReactElement, useEffect, useState } from "react";
import { useGaTracker } from "hooks";
import { HomeScreen } from "components/screens";

const App: React.FC = (): ReactElement => {
  // Init ga tracker
  useGaTracker();

  return <HomeScreen />;
};

export default App;

import React, { ReactElement, useEffect, useState } from "react";
import { useGaTracker } from "hooks";
import { HomeScreenContainer } from "container";

const App: React.FC = (): ReactElement => {
  // Init ga tracker
  useGaTracker();

  return <HomeScreenContainer />;
};

export default App;

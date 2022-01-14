import React, { ReactElement, useEffect, useState } from "react";
import { useGaTracker } from "hooks";
import { LockScreen } from "components/screens";

const App: React.FC = (): ReactElement => {
  // Init ga tracker
  useGaTracker();

  return (
    <>
      <LockScreen />
    </>
  );
};

export default App;

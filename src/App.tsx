import React, { ReactElement, useEffect, useState } from "react";
import { useGaTracker } from "hooks";
import { UserPictureListSelector } from "components";

const App: React.FC = (): ReactElement => {
  // Init ga tracker
  useGaTracker();

  return (
    <>
      <UserPictureListSelector />
    </>
  );
};

export default App;

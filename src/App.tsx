import React, { ReactElement, useEffect, useState } from "react";
import { useGaTracker } from "hooks";
import { UserPictureListSelector } from "components";

const App: React.FC = (): ReactElement => {
  // Init ga tracker
  useGaTracker();

  return (
    <div className="w-screen h-screen overflow-scroll">
      <UserPictureListSelector />
    </div>
  );
};

export default App;

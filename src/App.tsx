import React, { ReactElement, useEffect, useState } from "react";
import { useGaTracker, useAppDispatch, useAppSelector } from "hooks";
import { HomeScreenContainer, BootingUpContaienr } from "container";
import { LockScreen } from "components/screens";
import { WelcomeWindow } from "components";

const App: React.FC = (): ReactElement => {
  const [isBootingDone, setIsBootingDone] = useState<boolean>(false);
  const { isPowerOn } = useAppSelector((state) => state.RootReducer);

  // Init ga tracker
  useGaTracker();

  // useEffect(() => {
  //   if (isPowerOn) {
  //     const timeId = setTimeout(() => {
  //       setIsBootingDone(true);
  //     }, 5000);

  //     return () => {
  //       clearTimeout(timeId);
  //     };
  //   }
  // }, []);

  // if (!isPowerOn) return <LockScreen />;
  // else if (isBootingDone) return <HomeScreenContainer />;
  // else return <BootingUpContaienr />;
  return <HomeScreenContainer />;
};

export default App;

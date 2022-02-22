import React, { ReactElement, useEffect, useState } from "react";
import { Icon, RightClickMenu, Slider, StartMenu, TaskBar } from "components";
import { HomeScreenContainer, BootingUpContaienr } from "container";
import { useGaTracker } from "hooks";
import { LockScreen } from "components/screens";

const App: React.FC = (): ReactElement => {
  const [isBootingDone, setIsBootingDone] = useState<boolean>(false);
  // const { isPowerOn } = useAppSelector((state) => state.RootReducer);
  const isPowerOn = true;

  // Init ga tracker
  useGaTracker();

  useEffect(() => {
    if (isPowerOn) {
      const timeId = setTimeout(() => {
        setIsBootingDone(true);
      }, 5000);

      return () => {
        clearTimeout(timeId);
      };
    }
  }, []);

  if (!isPowerOn) return <LockScreen />;
  else if (isBootingDone) return <HomeScreenContainer />;
  else return <BootingUpContaienr />;

  // return <HomeScreenContainer />
};

export default App;

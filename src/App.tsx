import React, { ReactElement, useEffect, useState } from "react";
import { Icon } from "components";

const App: React.FC = (): ReactElement => {
  const [isBootingDone, setIsBootingDone] = useState<boolean>(false);
  // const { isPowerOn } = useAppSelector((state) => state.RootReducer);

  // Init ga tracker
  // useGaTracker();

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
  return (
    <div className="flex flex-col gap-1">
      <Icon.Folder>New Folder</Icon.Folder>
    </div>
  );
};

export default App;

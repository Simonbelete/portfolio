import React, { ReactElement, useEffect, useState } from "react";
import { Icon, RightClickMenu, Slider, StartMenu, TaskBar } from "components";
import { HomeScreenContainer } from "container";
import { useGaTracker } from "hooks";

const App: React.FC = (): ReactElement => {
  const [isBootingDone, setIsBootingDone] = useState<boolean>(false);
  // const { isPowerOn } = useAppSelector((state) => state.RootReducer);

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
  // return (
  //   <div
  //     className="relative h-screen w-screen"
  //     style={{
  //       background: `url(/backgrounds/bliss.jpg)`,
  //       backgroundRepeat: "no-repeat",
  //       backgroundPosition: "center",
  //       backgroundSize: "cover",
  //     }}
  //   >
  //     <TaskBar />
  //     <Icon.Folder>New Folder</Icon.Folder>
  //     <RightClickMenu.Folder show={true} />
  //     <Slider />
  //     <StartMenu />
  //   </div>
  // );

  return <HomeScreenContainer />;
};

export default App;

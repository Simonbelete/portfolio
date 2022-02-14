import React, { ReactElement, useEffect, useState } from "react";
import { Icon, RightClickMenu, Slider } from "components";

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
    <div
      className="relative h-screen w-screen"
      style={{
        background: `url(/backgrounds/bliss.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Icon.Folder>New Folder</Icon.Folder>
      <RightClickMenu.Folder show={true} />
      <Slider />
    </div>
  );
};

export default App;

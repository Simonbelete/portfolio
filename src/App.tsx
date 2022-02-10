import React, { ReactElement, useEffect, useState } from "react";
import { Icon, RightClickMenu } from "components";

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
      className="flex flex-col gap-1 h-screen w-screen"
      style={{
        background: `url(/backgrounds/bliss.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Icon.Folder>New Folder</Icon.Folder>
      <RightClickMenu.Folder show={true} />
    </div>
  );
};

export default App;

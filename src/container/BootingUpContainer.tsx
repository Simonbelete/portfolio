import React, { ReactElement, useEffect, useState } from "react";
import { WelcomeScreen, WindowsBooting } from "components";
import { useAudio } from "hooks";

const BootingUpContaienr: React.FC = (): ReactElement => {
  const [booted, setBooted] = useState<boolean>(false);
  // const audio: any = useAudio("/sounds/windows-xp-startup.mp3");

  useEffect(() => {
    const timeId = setTimeout(() => {
      setBooted(true);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (booted) {
    return <WelcomeScreen />;
  } else return <WindowsBooting />;
};

export default BootingUpContaienr;

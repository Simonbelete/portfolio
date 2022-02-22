import React, { ReactElement, useEffect, useState } from "react";
import { BootingScreen } from "components/screens";
import { WelcomeScreen } from "components/screens";
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
  } else return <BootingScreen />;
};

export default BootingUpContaienr;

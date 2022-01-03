import React, { ReactElement, useEffect, useState } from "react";
import {
  WelcomeScreen,
  FontWrapper,
  BackgroundImageWrapper,
  HomeScreen,
  StartBar,
  StartMenu,
  Folder,
  WindowsBooting,
  Window,
} from "components";
import { BootingUpContaienr, StartBarContainer } from "container";
import { useGaTracker } from "hooks";

const App: React.FC = (): ReactElement => {
  const [isBootingDone, setIsBootingDone] = useState<boolean>(false);

  // Init ga tracker
  useGaTracker();

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsBootingDone(true);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (isBootingDone)
    return (
      <FontWrapper>
        <BackgroundImageWrapper>
          <HomeScreen>
            <HomeScreen.Body>
              <Folder />
              <Window />
            </HomeScreen.Body>
            <HomeScreen.Footer>
              <StartMenu />
              <StartBarContainer />
            </HomeScreen.Footer>
          </HomeScreen>
        </BackgroundImageWrapper>
      </FontWrapper>
    );
  else return <BootingUpContaienr />;
};

export default App;

import React, { ReactElement, useEffect, useState } from "react";
import {
  WelcomeScreen,
  FontWrapper,
  BackgroundImageWrapper,
  HomeScreen,
  StartBar,
  Folder,
  WindowsBooting,
  Window,
  LogOffWindow,
} from "components";
import {
  BootingUpContaienr,
  StartBarContainer,
  WindowsManager,
  DesktopContainer,
  UserAccountIconContainer,
} from "container";
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
              <DesktopContainer />
              <WindowsManager />
              <UserAccountIconContainer />
              {/* <LogOffWindow /> */}
            </HomeScreen.Body>
            <HomeScreen.Footer>
              {/* <StartMenuContaienr /> */}
              <StartBarContainer />
            </HomeScreen.Footer>
          </HomeScreen>
        </BackgroundImageWrapper>
      </FontWrapper>
    );
  else return <BootingUpContaienr />;
};

export default App;

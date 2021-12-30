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
} from "components";
import { BootingUpContaienr } from "container";

const App: React.FC = (): ReactElement => {
  const [isBootingDone, setIsBootingDone] = useState<boolean>(false);

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
            </HomeScreen.Body>
            <HomeScreen.Footer>
              <StartMenu />
              <StartBar />
            </HomeScreen.Footer>
          </HomeScreen>
        </BackgroundImageWrapper>
      </FontWrapper>
    );
  else return <BootingUpContaienr />;
};

export default App;

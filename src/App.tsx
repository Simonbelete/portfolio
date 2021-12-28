import React, { ReactElement } from "react";
import {
  BackgroundImageWrapper,
  FontWrapper,
  Folder,
  HomeScreen,
  StartBar,
  StartMenu,
} from "components";

const App: React.FC = (): ReactElement => {
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
};

export default App;

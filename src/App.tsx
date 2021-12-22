import React, { ReactElement } from "react";
import { BackgroundImageWrapper, Folder } from "components";

const App: React.FC = (): ReactElement => {
  return (
    <BackgroundImageWrapper>
      <div className="h-24" />
      <Folder />
    </BackgroundImageWrapper>
  );
};

export default App;

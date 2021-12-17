import React, { ReactElement } from "react";
import { WindowsLogoFull, LoadingBar } from "components";

const WindowsBooting: React.FC = (): ReactElement => {
  return (
    <div className="bg-black w-screen h-screen">
      {/* Page Ceneter */}
      <div className="flex flex-col gap-24 items-center justify-center m-auto h-full">
        <WindowsLogoFull />
        <LoadingBar />
      </div>
      {/* Footer */}
    </div>
  );
};

export default WindowsBooting;

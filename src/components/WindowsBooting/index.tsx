import React, { ReactElement } from "react";
import { WindowsLogoFull, LoadingBar } from "components";

const WindowsBooting: React.FC = (): ReactElement => {
  return (
    <div className="bg-black w-screen h-screen">
      {/* Page Ceneter */}
      <div className="flex flex-col gap-24 items-center justify-center m-auto h-full relative">
        <WindowsLogoFull />
        <LoadingBar />
        {/* Footer */}
        <div className="flex justify-between text-white w-full md:px-20 px-5 absolute bottom-20">
          <h5>Copyright &copy; Microsoft Corporation</h5>
          <h5 className="font-black italic">Microsoft</h5>
        </div>
      </div>
    </div>
  );
};

export default WindowsBooting;

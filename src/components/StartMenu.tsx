import React, { ReactElement } from "react";

const StartMenu: React.FC = (): ReactElement => {
  return (
    <div className="w-[100px] md:w-[380px] absolute bottom-8">
      <div className="w-auto">
        <div
          className="relative flex flex-col justify-between w-full h-[400px] md:h-[475px] bg-white rounded-tl-[5px] rounded-tr-[5px]"
          style={{
            background: "linear-gradient(#225ad9 7%, white, white, #225ad9)",
            boxShadow: "0px 1px 4px black",
          }}
        >
          {/* Header */}
          <div className="h-[15%] flex items-center justify-start px-2 py-2">
            UserName
          </div>
          {/* Body */}
          <div className="h-full w-full pr-[1px] bg-[#225ad9]">
            <div className="h-full w-full flex flex-row justify-between">
              {/* Left */}
              <div className="bg-white w-full h-full flex flex-col gap-2 p-2">
                {/* <LeftStartMenus /> */}
              </div>
              {/* Right */}
              <div className="w-full h-full bg-[#d3e5fa] p-2">
                {/* <RightStartMenus /> */}
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="w-full h-[10%] flex justify-end items-center px-3">
            {/* <PowerOffAndLogOff /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;

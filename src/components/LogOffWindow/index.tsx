import React, { ReactElement } from "react";
import { Button } from "components";

const LogOffWindow: React.FC = (): ReactElement => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="inline-block align-bottom bg-white transform transition-all w-96 border border-black h-56 flex-row justify-between">
          {/* Header */}
          <div className="bg-[#003399] h-[20%] flex flex-row items-center justify-between px-3">
            <p className="text-white text-xl">Log Off Windows</p>
          </div>
          {/* Body */}
          <div
            className="bg-[#003399] h-[60%] flex flex-row gap-14 items-center justify-center m-auto"
            style={{
              background:
                "linear-gradient(90deg, rgba(90,125,222,1) 0%, rgba(148,178,243,1) 50%, rgba(90,125,222,1) 100%)",
            }}
          >
            <div className="flex flex-col gap-2 items-center justify-center pr-3 pl-1 text-white hover:brightness-105">
              <img
                src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-170.ico"
                alt="Log Off"
                className="aspect-square h-10 w-10"
              />
              <p className="font-tahoma text-[13px] text-white">Switch User</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center pr-3 pl-1 text-white hover:brightness-105">
              <img
                src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-044.ico"
                alt="Log Off"
                className="aspect-square h-10 w-10"
              />
              <p className="font-tahoma text-[13px] text-white">Log Off</p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#003399] h-[20%] flex justify-end items-center px-4">
            <Button>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOffWindow;

import React, { ReactElement } from "react";

const PowerOffAndLogOff: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row gap-1 items-center justify-center pr-3 pl-1 hover:bg-primary text-white">
        <img
          src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-044.ico"
          alt="Log Off"
          className="aspect-square h-6 w-6"
        />
        <p className="font-tahoma text-[11px] text-white font-normal">
          Log Off
        </p>
      </div>
      <div className="flex flex-row gap-1 items-center justify-center pr-3 pl-1 hover:bg-primary text-white">
        <img
          src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-027.ico"
          alt="Log Off"
          className="aspect-square h-6 w-6"
        />
        <p className="font-tahoma text-[11px] text-white font-normal">
          Turn Off Computer
        </p>
      </div>
    </div>
  );
};

export default PowerOffAndLogOff;

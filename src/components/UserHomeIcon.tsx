import React, { ReactElement } from "react";

const UserHomeIcon: React.FC = (): ReactElement => {
  return (
    <div className="inline-flex flex-row gap-1 items-center justify-center">
      <img
        src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-160.ico"
        alt="Users Icon"
        className="h-6 w-6"
      />
      <p className="text-[12px] font-tahoma">Home</p>
    </div>
  );
};

export default UserHomeIcon;

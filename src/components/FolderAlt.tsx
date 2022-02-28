import React, { ReactElement } from "react";

const FolderAlt: React.FC<{ children: string }> = ({
  children,
}): ReactElement => {
  return (
    <div className="relative">
      <img src="/icons_temp/Folder Closed (Alt).ico" alt="Folder (Alt)" />
      <div className="absolute top-10 left-10 grid grid-cols-2 grid-flow-col">
        <img
          className=""
          src="/screencapture-admin-shewaberr-home-2021-11-29-21_45_18.png"
          alt=""
        />
        <img
          className=""
          src="/screencapture-admin-shewaberr-home-2021-11-29-21_45_18.png"
          alt=""
        />
        <img
          className=""
          src="/screencapture-admin-shewaberr-home-2021-11-29-21_45_18.png"
          alt=""
        />
        <img
          className=""
          src="/screencapture-admin-shewaberr-home-2021-11-29-21_45_18.png"
          alt=""
        />
      </div>
      <p className="handle text-xs text-white max-w-[96px] text-center line-clamp-2">
        {children}
      </p>
    </div>
  );
};

export default FolderAlt;

import React, { ReactElement } from "react";

const FolderAlt: React.FC<{ children: string; thumbnails: string[] }> = ({
  children,
  thumbnails,
}): ReactElement => {
  return (
    <div className="relative inline-flex flex-col">
      <div className="border border-[#f7f5ea] p-[1px]">
        <img
          src="/icons_temp/Folder Closed (Alt).ico"
          className="w-[95px] h-[95px]"
          alt="Folder (Alt)"
        />
      </div>
      {thumbnails.length > 1 ? (
        () => {
          thumbnails.map((_) => (
            <div className="absolute top-5 left-2 grid grid-cols-2 grid-flow-row gap-2">
              <img className="w-[30px]" src={_} alt="" />
            </div>
          ));
        }
      ) : (
        <div className="absolute top-5 left-2 right-2">
          <img className="w-full h-full" src={thumbnails[0]} alt="" />
        </div>
      )}
      <p className="pt-2 text-sm text-black max-w-[96px] text-center line-clamp-2">
        {children}
      </p>
    </div>
  );
};

export default FolderAlt;

import React, { ReactElement } from "react";

const TitleBarControllers: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-row gap-1 w-full justify-end">
      <img
        src="/icons/minimize.svg"
        alt="Minimize"
        className="w-[21px] h-[21px] hover:backdrop-brightness-125"
      />
      <img
        src="/icons/maximize.svg"
        alt="Maximize"
        className="w-[21px] h-[21px] hover:backdrop-brightness-125"
      />
      <img
        src="/icons/close.svg"
        alt="Close"
        className="w-[21px] h-[21px] hover:backdrop-brightness-125"
      />
    </div>
  );
};

export default TitleBarControllers;

import React, { ReactElement } from "react";
import { StartButton, StartMenu } from "components";

const StartBar: React.FC<{ onClick: () => void }> = ({
  onClick,
}): ReactElement => {
  return (
    <div className="grid grid-cols-12 bg-[#235cdb]">
      <div
        onClick={onClick}
        className="col-span-1 h-[25px] bg-[#369937] flex gap-1 items-center justify-center  rounded-tr-lg rounded-br-lg"
      >
        <StartButton />
        <p
          className="font-extrabold italic text-white font-sans"
          style={{ textShadow: "1px 1px 1px black" }}
        >
          Start
        </p>
      </div>
      <div className="bg-[#235cdb] col-span-8"></div>
      <div className="bg-[#1199ed] col-span-2"></div>
    </div>
  );
};

export default StartBar;

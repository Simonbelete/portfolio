import React, { ReactElement } from "react";
import { Window } from "components";

const Key: React.FC<{ children: string; color?: string }> = ({
  children,
  color = "bg-white text-black",
}): ReactElement => {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer text-base font-bold w-[25px] h-[22px] ${color} rounded-sm hover:bg-navy-blue hover:text-white hover:border-2 hover:border-red-700`}
    >
      {children}
    </div>
  );
};

const OnScreenKeyboard: React.FC = (): ReactElement => {
  return (
    <Window height={200} width={600}>
      <div className="bg-mariner-1 flex flex-row gap-2 w-full px-1 py-1">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1">
            <Key>esc</Key>
            <div className="w-[25px]" />
            <Key>F1</Key>
            <Key>F2</Key>
            <Key>F3</Key>
            <Key>F4</Key>
            <div className="w-[10px]" />
            <Key>F5</Key>
            <Key>F6</Key>
            <Key>F7</Key>
            <Key>F8</Key>
            <div className="w-[10px]" />
            <Key>F9</Key>
            <Key>F10</Key>
            <Key>F11</Key>
            <Key>F12</Key>
          </div>
          <div></div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <Key>psc</Key>
              <Key color="bg-jordy-blue text-white">slk</Key>
              <Key>brk</Key>
            </div>
            <div className="grid grid-flow-row grid-cols-3 gap-1">
              <Key>ins</Key>
              <Key>hm</Key>
              <Key>pub</Key>
              <Key>del</Key>
              <Key>end</Key>
              <Key>pdn</Key>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default OnScreenKeyboard;

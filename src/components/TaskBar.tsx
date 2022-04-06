import React, { ReactElement, useCallback } from "react";
import { Menu } from "@headlessui/react";
import { NotificationArea } from "components";
import StartMenu from "./StartMenu";
import { Windows } from "rootSlice";
import { WINDOWS } from "components/windows";

const TaskBar: React.FC<{
  windows?: Windows[];
  onTaskBarWindowToggle: (i: number) => void;
}> = ({ windows = [], onTaskBarWindowToggle }): ReactElement => {
  const toggleVisibality = useCallback(
    (i: number) => {
      onTaskBarWindowToggle(i);
    },
    [onTaskBarWindowToggle]
  );

  return (
    <div
      className="w-screen absolute bottom-0 left-0 right-0 h-[31px] z-[999]"
      style={{
        background: "linear-gradient(white -26px, #225ad9 10px, #225ad9)",
      }}
    >
      <Menu as="div" className="h-full">
        <Menu.Items className="w-auto">
          <StartMenu />
        </Menu.Items>

        <div className="flex flex-row h-full">
          <Menu.Button className="basis-24">
            <div className="hover:brightness-110 hover:cursor-xp h-full">
              <img
                src="/images/start_button.png"
                alt="start Menu"
                className="h-full w-full"
              />
            </div>
          </Menu.Button>
          <div className="basis-3/4 lg:basis-4/5 border-r-2 border-gray-600 pt-[6px] pb-[2px] px-3">
            <div className="grid grid-cols-12 h-full w-full items-center justify-center">
              {/* // TODO: use static description for taksbars */}
              {windows.map((_, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => toggleVisibality(i)}
                    className="col-span-3 md:col-span-1 flex flex-row items-center justify-start px-2 h-full w-full bg-[#3e83f1] hover:bg-[#5295ff] border-r border-[#1F408C] rounded"
                  >
                    <img
                      src={WINDOWS[i].toolBarIcon}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    <p className="text-white text-sm truncate hidden md:flex">
                      {WINDOWS[i].title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <NotificationArea />
        </div>
      </Menu>
    </div>
  );
};

export default TaskBar;

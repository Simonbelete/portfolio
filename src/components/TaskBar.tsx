import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NotificationArea } from "components";
import StartMenu from "./StartMenu";
import { Windows, Types } from "rootSlice";

const TaskBar: React.FC<{ windows?: Windows[] }> = ({
  windows = [],
}): ReactElement => {
  return (
    <div
      className="w-screen absolute bottom-0 left-0 right-0 h-[31px]"
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
            <div className="hover:brightness-125 h-full">
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
              {/* // Manually window's taskbar icon and title */}
              {windows.map((_) => {
                let img = "";
                let title = "";
                if (_.type === Types.WELCOME_WINDOW) {
                  img = "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-070.ico";
                  title = "Gretting - Welcome";
                }
                return (
                  <div className="col-span-1 flex flex-row items-center justify-start px-2 h-full w-full bg-[#3e83f1] hover:bg-[#5295ff] border-r border-[#1F408C] rounded">
                    <img src={img} alt="" className="h-[20px] w-[20px]" />
                    <p className="text-white text-sm truncate">{title}</p>
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

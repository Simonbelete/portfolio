import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NotificationArea } from "components";
import StartMenu from "./StartMenu";

const TaskBar: React.FC = (): ReactElement => {
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
            <div className="hover:brightness-125">
              <img src="/images/start_button.png" alt="start Menu" />
            </div>
          </Menu.Button>
          <div className="basis-3/4 lg:basis-4/5 border-r-2 border-gray-600"></div>
          <NotificationArea />
        </div>
      </Menu>
    </div>
  );
};

export default TaskBar;

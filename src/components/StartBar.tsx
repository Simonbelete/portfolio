import React, { ReactElement } from "react";
import {
  StartButton,
  PowerOffAndLogOff,
  LeftStartMenus,
  RightStartMenus,
} from "components";
import { Menu, Transition } from "@headlessui/react";

const StartBar: React.FC<{ user: ReactElement }> = ({ user }): ReactElement => {
  return (
    <div
      className="w-full h-full"
      style={{
        background: "linear-gradient(white -26px, #225ad9 10px, #225ad9)",
      }}
    >
      <Menu as="div" className="h-full">
        <div className="w-[100px] md:w-[380px] absolute bottom-8">
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="w-auto">
              <div
                className="relative flex flex-col justify-between w-full h-[400px] md:h-[475px] bg-white rounded-tl-[5px] rounded-tr-[5px]"
                style={{
                  background:
                    "linear-gradient(#225ad9 7%, white, white, #225ad9)",
                  boxShadow: "0px 1px 4px black",
                }}
              >
                {/* Header */}
                <div className="h-[15%] flex items-center justify-start px-2 py-2">
                  {user}
                </div>
                {/* Body */}
                <div className="h-full w-full pr-[1px] bg-[#225ad9]">
                  <div className="h-full w-full flex flex-row justify-between">
                    {/* Left */}
                    <div className="bg-white w-full h-full flex flex-col gap-2 p-2">
                      <LeftStartMenus />
                    </div>
                    {/* Right */}
                    <div className="w-full h-full bg-[#d3e5fa] p-2">
                      <RightStartMenus />
                    </div>
                  </div>
                </div>
                {/* Bottom */}
                <div className="w-full h-[10%] flex justify-end items-center px-3">
                  <PowerOffAndLogOff />
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </div>

        <div className="flex flex-row h-full">
          <Menu.Button className="basis-24">
            <StartButton />
          </Menu.Button>
          <div className="basis-3/4 border-r-2 border-gray-600"></div>
          <div
            className=" shadow-lg basis-1/6"
            style={{
              background: "linear-gradient(white -26px, #0e8fdf 10px, #0e8fdf)",
            }}
          ></div>
        </div>
      </Menu>
    </div>
  );
};

export default StartBar;

import React, { ReactElement } from "react";
import { StartButton, StartMenu } from "components";
import { Menu, Transition } from "@headlessui/react";

import { StartMenuContaienr } from "container";

const StartBar: React.FC<{ onClick: () => void }> = ({
  onClick,
}): ReactElement => {
  return (
    <div className="w-full h-full bg-[#235cdb]">
      <Menu as="div" className="h-full">
        <div className="w-[100px] md:w-[500px] absolute bottom-8">
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="w-auto">
              <div className="w-full h-[400px] md:h-[600px] bg-white rounded-tl-lg rounded-tr-lg">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                      href="/account-settings"
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"}`}
                      href="/account-settings"
                    >
                      Documentation
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>

        <div className="flex flex-row h-full">
          <Menu.Button className="basis-24">
            <StartButton />
          </Menu.Button>
          <div className="bg-[#235cdb] basis-1/2"></div>
          <div className="bg-[#1199ed] basis-1/4"></div>
        </div>
      </Menu>
    </div>
  );
};

export default StartBar;

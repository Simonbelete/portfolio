import React, { ReactElement } from "react";
import { StartButton, StartMenu } from "components";
import { Menu, Transition } from "@headlessui/react";

import { StartMenuContaienr } from "container";

const StartBar: React.FC<{ onClick: () => void }> = ({
  onClick,
}): ReactElement => {
  return (
    <div
      className="w-full h-full"
      style={{
        background: "linear-gradient(white -26px, #225ad9 10px, #225ad9)",
      }}
    >
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

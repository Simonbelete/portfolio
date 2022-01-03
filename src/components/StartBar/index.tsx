import React, { ReactElement } from "react";
import { StartButton, StartMenu } from "components";
import { Menu, Transition } from "@headlessui/react";

import { StartMenuContaienr } from "container";

const StartBar: React.FC<{ onClick: () => void }> = ({
  onClick,
}): ReactElement => {
  return (
    <div className="w-screen flex flex-col">
      <Menu as="div">
        <div className="w-[500px]">
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="w-auto">
              <div className="w-full h-[600px] bg-white rounded-tl-lg rounded-tr-lg">
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

        <div className="grid grid-cols-12 bg-[#235cdb]">
          <Menu.Button>
            <div
              // onClick={onClick}
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
          </Menu.Button>

          <div className="bg-[#235cdb] col-span-8"></div>
          <div className="bg-[#1199ed] col-span-2"></div>
        </div>
      </Menu>
    </div>
  );
};

export default StartBar;

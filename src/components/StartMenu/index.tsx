import React, { ReactElement, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";

const StartMenu: React.FC = (): ReactElement => {
  useEffect(() => {
    document.addEventListener("keypress", (event: any) => {
      console.log(event);
    });
  }, []);
  return (
    <Menu>
      {({ open }) => (
        <>
          {/* <Menu.Button>More</Menu.Button> */}
          <Transition
            show={false}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items static>
              <div className="w-[500px] h-[600px] bg-white rounded-tl-lg rounded-tr-lg">
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
        </>
      )}
    </Menu>
  );
};

export default StartMenu;

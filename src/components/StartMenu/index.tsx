import React, { createRef, ReactElement, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

const StartMenu: React.FC<{ display: boolean }> = ({
  display = false,
}): ReactElement => {
  const btnRef = createRef<HTMLButtonElement>();
  const [show, setShow] = useState(display);
  useEffect(() => {
    setShow(display);
  }, [display]);

  useEffect(() => {
    console.log(btnRef);
    console.log(btnRef.current?.ariaExpanded);
  }, [btnRef]);

  return (
    <div>
      <button
        onClick={() => {
          // if (btnRef != null) console.log(btnRef.current.ariaExpanded);
        }}
      ></button>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button ref={btnRef}>More</Menu.Button>
            {/* {console.log(open)} */}
            <Transition
              show={true}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="w-auto">
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
    </div>
  );
};

export default StartMenu;

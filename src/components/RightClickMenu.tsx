import React, { ReactElement, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";

export interface Menus {
  menu: string | ReactElement | ReactElement[];
  disabled?: boolean;
  subMenus?: Menus[];
}

const RightClickMenu: React.FC<{
  show?: boolean;
  x?: string;
  y?: string;
  menus?: Menus[];
}> = ({ show = false, x, y, menus }): ReactElement => {
  const [xPos, setXPos] = useState(x);
  const [yPos, setYPos] = useState(y);

  useEffect(() => {
    setXPos(x);
    setYPos(y);
  }, [x, y]);
  return (
    <>
      {show && (
        <ul
          className="absolute bg-white py-1 px-2"
          style={{
            top: yPos,
            left: xPos,
            boxShadow: "1px 1px 4px rgb(0 0 0)",
          }}
        >
          {menus &&
            menus.map((_, i) => {
              if (_.menu === "<hr />") return <hr className="py-[2px]" />;
              if (_.subMenus && _.subMenus.length > 0) {
                return (
                  <Menu
                    as="li"
                    className="w-full h-full cursor-pointer text-base px-2 py-[1px] hover:bg-mariner hover:text-white"
                  >
                    <Menu.Button>
                      <div className="flex justify-between">
                        {_.menu}
                        <p>&gt;</p>
                      </div>
                    </Menu.Button>
                    <Menu.Items>
                      {_.subMenus.map((e) => (
                        <Menu.Item disabled={e.disabled}>
                          {({ active }) => (
                            <a
                              className={`${active && "bg-blue-500"}`}
                              href="/account-settings"
                            >
                              {e.menu}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                );
              } else {
                return (
                  <li className=" w-full h-full cursor-pointer text-base px-2 py-[1px] hover:bg-mariner hover:text-white">
                    {_.menu}
                  </li>
                );
              }
              // if (_ === "<hr />") return <hr className="py-[2px]" />;
              // else
              //   return (
              //     <li
              //       className={`${
              //         i == 0 ? "font-bold" : ""
              //       } w-full h-full cursor-pointer text-base px-2 py-[1px] hover:bg-mariner hover:text-white`}
              //     >
              //       {_}
              //     </li>
              //   );
            })}
        </ul>
      )}
    </>
  );
};

const Folder: React.FC<React.ComponentProps<typeof RightClickMenu>> = ({
  ...props
}): ReactElement => {
  const menus = [
    "Open",
    "Explore",
    "Search...",
    "Sharing and Security...",
    "<hr />",
    "Cut",
    "Copy",
    "<hr />",
    "Create Shortcut",
    "Delete",
    "Rename",
    "<hr />",
    "Properties",
  ];
  return <RightClickMenu menus={[]} {...props} />;
};

const Desktop: React.FC<React.ComponentProps<typeof RightClickMenu>> = ({
  ...props
}): ReactElement => {
  const menus: Menus[] = [
    {
      menu: "Arrange Icons By",
      subMenus: [
        {
          menu: "Name",
        },
        {
          menu: "Size",
        },
        {
          menu: "Type",
        },
        {
          menu: "Modified",
        },
      ],
    },
    {
      menu: "Refresh",
    },
    {
      menu: "<hr />",
    },
    {
      menu: "Paste",
    },
    {
      menu: "Paste Shortcut",
      subMenus: [],
    },
    // TODO: add undo
    {
      menu: "<hr />",
    },
    {
      menu: "New",
    },
    {
      menu: "<hr />",
    },
    {
      menu: "Properties",
    },
  ];
  return <RightClickMenu menus={menus} {...props} />;
};

const RightClickMenuObject = Object.assign(RightClickMenu, { Folder, Desktop });

export default RightClickMenuObject;

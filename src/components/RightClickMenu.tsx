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
          className="absolute bg-white py-1 w-[128px] text-sm"
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
                    className="relative w-full h-full cursor-pointer text-base px-2 py-[1px] hover:bg-mariner hover:text-white"
                  >
                    <Menu.Button className="w-full">
                      <div className="flex w-full justify-between">
                        {_.menu}
                        <p>&gt;</p>
                      </div>
                    </Menu.Button>
                    <Menu.Items
                      className="absolute w-[170px] top-0 left-[10.72em] bg-white flex flex-col gap-1 text-black"
                      style={{
                        boxShadow: "1px 1px 4px rgb(0 0 0)",
                      }}
                    >
                      {_.subMenus.map((e) => {
                        if (e.menu === "<hr />")
                          return <hr className="py-[2px]" />;
                        return (
                          <Menu.Item disabled={e.disabled}>
                            <a
                              className="hover:bg-mariner hover:text-white px-2"
                              href="/account-settings"
                            >
                              {e.menu}
                            </a>
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </Menu>
                );
              } else {
                return (
                  <li className="w-full h-full cursor-pointer text-base pl-2 py-[1px] hover:bg-mariner hover:text-white">
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
        {
          menu: "<hr />",
        },
        {
          menu: "Show in Groups",
          disabled: true,
        },
        {
          menu: "Auto Arrange",
        },
        {
          menu: "Align to Grid",
        },
        {
          menu: "<hr />",
        },
        {
          menu: "Show Desktop Icons",
        },
        {
          menu: "Lock Web Items on Desktop",
        },
        {
          menu: "Run Desktop Cleanup Wizard",
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
      subMenus: [
        {
          menu: "Folder",
        },
        {
          menu: "Shortcut",
        },
        {
          menu: "<hr />",
        },
        {
          menu: "Briefcase",
        },
        {
          menu: "Bitmap Image",
        },
        {
          menu: "Wordpad Document",
        },
        {
          menu: "Rich Text Document",
        },
        {
          menu: "Text Document",
        },
        {
          menu: "Wave Sound",
        },
        {
          menu: "Compressed (zipped) Folder",
        },
      ],
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

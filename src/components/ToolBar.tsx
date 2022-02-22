import React, { ReactElement } from "react";
import { Menu } from "@headlessui/react";

const ToolBar: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-row gap-2">
      <Menu as="div" className="relative inline-block">
        <Menu.Button
          className="hover:bg-[#0058f4] hover:text-white px-[10px] py-[2px] text-[#323136] text-[12px]"
          style={{ fontFamily: "tahoma !important" }}
        >
          File
        </Menu.Button>
        <Menu.Items className="absolute top-5 left-1 w-28 origin-top-right bg-white shadow-2xl">
          <div className="px-1 py-1 flex flex-col text-[12px]">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  New
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Open
                </a>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-75">Save As...</span>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default ToolBar;

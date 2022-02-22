import React, { ReactElement, useEffect, useState } from "react";

const RightClickMenu: React.FC<{
  show?: boolean;
  x?: string;
  y?: string;
  menus?: string[];
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
          className="absolute bg-white py-1 px-1"
          style={{
            top: yPos,
            left: xPos,
            boxShadow: "1px 1px 4px rgb(0 0 0)",
          }}
        >
          {console.log(x + " " + y)}
          {menus &&
            menus.map((_, i) => {
              if (_ === "<hr />") return <hr className="py-[2px]" />;
              else
                return (
                  <li
                    className={`${
                      i == 0 ? "font-bold" : ""
                    } w-full h-full cursor-pointer text-base px-2 py-[1px] hover:bg-mariner hover:text-white`}
                  >
                    {_}
                  </li>
                );
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
  return <RightClickMenu menus={menus} {...props} />;
};

const Desktop: React.FC<React.ComponentProps<typeof RightClickMenu>> = ({
  ...props
}): ReactElement => {
  const menus = [
    "Arrange Icon By",
    "Refresh",
    "Paste",
    "Paste Shortcut",
    "New",
    "Properties",
  ];
  return <RightClickMenu menus={menus} {...props} />;
};

const RightClickMenuObject = Object.assign(RightClickMenu, { Folder, Desktop });

export default RightClickMenuObject;

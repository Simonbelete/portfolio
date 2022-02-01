import React, { ReactElement, useRef, useEffect } from "react";
import { Rnd } from "react-rnd";
import { ToolBar, TitleBarControllers } from "components";
import { Types } from "rootSlice";

const Window: React.FC<{
  type?: Types;
  children?: ReactElement | ReactElement[];
}> = ({ type, children }): ReactElement => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 300,
        height: 300,
      }}
      // size={{ height: 50, width: 50 }}
      enableResizing={true}
      bounds="parent"
    >
      <div
        className="rounded-tl-[8px] rounded-tr-[8px] h-full w-full"
        style={{
          boxShadow:
            "inset -1px -1px #00138c, inset 1px 1px #0831d9, inset -2px -2px #001ea0, inset 2px 2px #166aee, inset -3px -3px #003bda, inset 3px 3px #0855dd",
          padding: "0 0 3px 0",
        }}
      >
        {/* Title Bar */}
        <div
          className="text-white flex flex-row items-center justify-between cursor-xp"
          style={{
            background:
              "linear-gradient(180deg, rgba(9, 151, 255, 1) 0%, rgba(0, 83, 238, 1) 8%, rgba(0, 80, 238, 1) 40%, rgba(0, 102, 255, 1) 88%, rgba(0, 102, 255, 1) 93%, rgba(0, 91, 255, 1) 95%, rgba(0, 61, 215, 1) 96%, rgba(0, 61, 215, 1) 100%)",
            padding: "3px 5px 3px 3px",
            borderTop: "1px solid #0831d9",
            borderLeft: "1px solid #0831d9",
            borderRight: "1px solid #001ea0",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "7px",
            fontSize: "13px",
            textShadow: "1px 1px #0f1089",
            height: "30px",
          }}
        >
          <div className="truncate">Icon and Name</div>
          <div>
            <TitleBarControllers />
          </div>
        </div>
        {/* ToolBars */}
        <div className="flex flex-col px-1">
          <div className="bg-[#f2efe3]">
            <ToolBar />
          </div>
        </div>
        {/* Body */}
        <div className="">asdfsdf</div>
        {/* Status Bar */}
        <div className="flex flex-row justify-between"></div>
      </div>
      {/* <div
        style={{
          background: "linear-gradient(white -26px, #225ad9 10px, #225ad9)",
          boxShadow:
            "inset -1px -1px #00138c, inset 1px 1px #0831d9, inset -2px -2px #001ea0, inset 2px 2px #166aee, inset -3px -3px #003bda, inset 3px 3px #0855dd",
        }}
        className=" rounded-tl-lg rounded-tr-lg w-full h-full relative cursor-xp"
      >
        <div className="py-2 px-2">
          <TitleBarControllers />
        </div>
        <div
          className="bg-white h-auto w-atuo absolute top-8 bottom-1 left-1 right-1"
          draggable="false"
        >
          <ToolBars />
        </div>
      </div> */}
    </Rnd>
  );
};

export default Window;

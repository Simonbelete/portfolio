import React, { ReactElement } from "react";
// import { ToolBar, TitleBarControllers } from "components";
// import { Types } from "rootSlice";
import { Rnd } from "react-rnd";
import ToolBar from "./ToolBar";

const Window: React.FC<{
  title?: ReactElement | ReactElement[] | string;
  // type?: Types;
  children?: ReactElement | ReactElement[];
  width?: number;
  height?: number;
  enableResizing?: boolean;
  x?: number;
  y?: number;
  toolBar?: ReactElement | ReactElement[];
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
}> = ({
  title,
  // type,
  children,
  width = 100,
  height = 100,
  enableResizing = true,
  x,
  y,
  toolBar,
  onMinimize,
  onMaximize,
  onClose,
}): ReactElement => {
  return (
    <Rnd
      default={{
        x: x ?? 100,
        y: y ?? 100,
        width: width ?? 300,
        height: height ?? 300,
      }}
      bounds="parent"
      dragHandleClassName="handle"
    >
      <div className="inline-flex w-full h-full">
        <div
          className="rounded-tl-[8px] rounded-tr-[8px] h-full w-full flex flex-col"
          style={{
            boxShadow:
              "inset -1px -1px #00138c, inset 1px 1px #0831d9, inset -2px -2px #001ea0, inset 2px 2px #166aee, inset -3px -3px #003bda, inset 3px 3px #0855dd",
            padding: "0 0 3px 0",
          }}
        >
          {/* Title Bar */}
          <div
            className="text-white grid grid-cols-12 items-center justify-between cursor-xp"
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
            // enableResizing={enableResizing}
          >
            <div className="col-span-9 truncate w-full handle">{title}</div>
            <div className="col-span-3">
              <div className="flex flex-row gap-1 w-full justify-end cursor-xp">
                <button onClick={onMinimize}>
                  <img
                    src="/icons/minimize.svg"
                    alt="Minimize"
                    className="w-[21px] h-[21px] hover:backdrop-brightness-125"
                  />
                </button>
                <button onClick={onMaximize}>
                  <img
                    src="/icons/maximize.svg"
                    alt="Maximize"
                    className="w-[21px] h-[21px] hover:backdrop-brightness-125"
                  />
                </button>
                <button onClick={onClose}>
                  <img
                    src="/icons/close.svg"
                    alt="Close"
                    className="w-[21px] h-[21px] hover:backdrop-brightness-125"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* ToolBars */}
          <div className="flex flex-col px-[3px]">
            {/* <div className="bg-spring-wood">
              <ToolBar />
            </div> */}
          </div>
          {/* Body */}
          <div className="flex px-[3px] h-full w-full overflow-auto">
            {children}
          </div>
          {/* Status Bar */}
          <div className="flex flex-row justify-between"></div>
        </div>
      </div>
    </Rnd>
  );
};

export default Window;

import React, { ReactElement, useRef, useEffect } from "react";
import { Rnd } from "react-rnd";
import { ToolBars } from "components";
import { Types } from "rootSlice";

const Window: React.FC<{ type: Types }> = ({ type }): ReactElement => {
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
        style={{
          background: "linear-gradient(white -26px, #225ad9 10px, #225ad9)",
          boxShadow:
            "inset -1px -1px #00138c, inset 1px 1px #0831d9, inset -2px -2px #001ea0, inset 2px 2px #166aee, inset -3px -3px #003bda, inset 3px 3px #0855dd",
        }}
        className=" rounded-tl-[8px] rounded-tr-[8px] w-full h-full relative cursor-xp"
      >
        <div
          className="bg-white h-auto w-atuo absolute top-8 bottom-1 left-1 right-1"
          draggable="false"
        >
          <ToolBars />
        </div>
      </div>
    </Rnd>
  );
};

export default Window;

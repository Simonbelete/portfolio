import React, { ReactElement, useRef, useEffect } from "react";
import { Rnd } from "react-rnd";
import { ToolBars } from "components";

const Window: React.FC = (): ReactElement => {
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
        }}
        className=" rounded-t-lg w-full h-full relative cursor-xp"
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

import React, { ReactElement } from "react";
import { useSpring, animated, useTransition } from "react-spring";

const LoadingBar: React.FC = (): ReactElement => {
  return (
    <div className="border-2 border-[#979696] rounded w-56 h-6 py-[1px] px-[5px] relative overflow-hidden">
      <div className="left-to-right-loading flex gap-[4px] w-full h-full">
        <div
          className=" h-full w-[11px]"
          style={{
            background:
              "linear-gradient(to top, #4866f6 40%, #bec5ff 70%, #4866f6)",
          }}
        />
        <div
          className="h-full w-[11px]"
          style={{
            background:
              "linear-gradient(to top, #4866f6 40%, #bec5ff 60%, #4866f6)",
          }}
        />
        <div
          className="h-full w-[11px]"
          style={{
            background:
              "linear-gradient(to top, #4866f6 20%, #bec5ff 50%, #4866f6)",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingBar;

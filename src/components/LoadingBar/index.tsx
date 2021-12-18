import React, { ReactElement } from "react";

const LoadingBar: React.FC = (): ReactElement => {
  return (
    <div className="border border-[#979696] rounded w-36 h-4 py-[1px] px-[5px] flex gap-[4px] ">
      <div
        className=" h-full w-[11px]"
        style={{
          animation: "myfirst 5s 2",
          position: "relative",
          animationDirection: "alternate",
          background:
            "linear-gradient(to top, #4866f6 40%, #bec5ff 70%, #4866f6)",
        }}
      />
      <div
        className="h-full w-[11px] "
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
  );
};

export default LoadingBar;

import React, { ReactElement } from "react";

const Slider: React.FC = (): ReactElement => {
  return (
    <div className="inline-flex flex-col bg-white-rock h-[150px]">
      <label>Volume</label>
      <input
        type="range"
        min="0"
        max="100"
        className="h-[2px] w-[100px]"
        style={{ transform: "rotate(270deg) translateX(calc(-50% + 8px))" }}
      />
    </div>
  );
};

export default Slider;

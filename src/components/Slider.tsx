import React, { ReactElement } from "react";

const Slider: React.FC = (): ReactElement => {
  return (
    <div className="inline-flex flex-col items-center  bg-white-rock h-[120px]">
      <label className="text-base">Volume</label>
      <input
        type="range"
        min="0"
        max="100"
        className="h-[2px] w-[80px] mt-12 po-range"
      />
    </div>
  );
};

export default Slider;

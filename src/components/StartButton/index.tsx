import React, { ReactElement } from "react";

const StartButton: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-row gap-1">
      <img
        src="/images/window_logo.png"
        alt="Window Logo icon"
        className="aspect-square w-5 h-5"
      />
    </div>
  );
};

export default StartButton;

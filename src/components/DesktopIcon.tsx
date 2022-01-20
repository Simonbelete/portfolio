import React, { ReactElement } from "react";
import { Rnd } from "react-rnd";

const DesktopIcon: React.FC<{
  children: string;
  iconUrl: string;
  x: number;
  y: number;
}> = ({ children, iconUrl, x, y }): ReactElement => {
  return (
    <Rnd
      default={{
        x: x,
        y: y,
        width: "auto",
        height: 50,
      }}
      enableResizing={false}
      bounds="parent"
    >
      <div className="inline-flex flex-col justify-center items-center gap-1 cursor-xp">
        <img src={iconUrl} alt="" className="aspect-square h-8 w-8" />
        <p
          className="text-xs text-white w-[96px] text-center line-clamp-2"
          style={{
            textShadow: "0.1em 1px 1px black",
            fontSize: "0.7em",
            letterSpacing: "-0.025em",
          }}
        >
          {children}
        </p>
      </div>
    </Rnd>
  );
};

export default DesktopIcon;

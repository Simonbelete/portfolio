import React, { ReactElement } from "react";
import { Rnd } from "react-rnd";

const DesktopIcon: React.FC<{ children: string; iconUrl: string }> = ({
  children,
  iconUrl,
}): ReactElement => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: "auto",
        height: 50,
      }}
      enableResizing={false}
      bounds="parent"
    >
      <div className="inline-flex flex-col justify-center items-center gap-1 cursor-default">
        <img src={iconUrl} alt="" className="aspect-square h-8 w-8" />
        <p
          className="text-xs text-white"
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

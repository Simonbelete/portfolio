import React, { ReactElement, useState } from "react";
import { Window, Button } from "components";
import { useScreenSize } from "hooks";

const GrettingWindow: React.FC<React.ComponentProps<typeof Window>> = ({
  ...props
}): ReactElement => {
  const { height, width } = useScreenSize();
  const [xPos, setXPos] = useState(width < 500 ? width * 0.06 : width * 0.4);
  const [yPos, setYPos] = useState(height * 0.1);
  const [winWidth, setWindWidth] = useState(350);
  const [winHeight, setWinHeight] = useState(200);

  const handleMaximize = () => {
    console.log("abcd");
    setXPos(0);
    setYPos(0);
    setWindWidth(width);
    setWinHeight(height);
  };

  return (
    <Window
      {...props}
      // onMaximize={handleMaximize}
      enableResizing={false}
      width={winWidth}
      height={winHeight}
      x={xPos}
      y={yPos}
      title={<p>Welcome </p>}
    >
      <div className="bg-[#f2efe3] flex flex-col justify-between gap-3 px-4 h-auto w-full cursor-xp">
        <div className="flex flex-row items-center gap-5">
          <img
            src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-221.ico"
            alt="Info icon"
            className="h-7 w-8"
          />
          <p className="text-[12px] w-96">
            Welcome to my portfolio!
            <br />
            I'm a Full Stack developer and AI enthusiast
          </p>
        </div>
        <div className="w-full flex flex-row gap-1 justify-end items-center pb-10">
          <a target="_blank" href="/simon_belete_cv.pdf">
            <Button>Download CV</Button>
          </a>
          <Button>View Projects</Button>
          <Button>Cancel</Button>
        </div>
      </div>
    </Window>
  );
};

export default GrettingWindow;

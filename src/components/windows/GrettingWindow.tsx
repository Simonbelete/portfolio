import React, { ReactElement } from "react";
import { Window, Button } from "components";
import { useScreenSize } from "hooks";

const GrettingWindow: React.FC<React.ComponentProps<typeof Window>> = ({
  ...props
}): ReactElement => {
  const { height, width } = useScreenSize();
  return (
    <Window
      {...props}
      enableResizing={false}
      width={350}
      height={200}
      x={width < 500 ? width * 0.06 : width * 0.4}
      y={height * 0.1}
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

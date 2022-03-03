import React, { ReactElement, useState } from "react";
import { Window, Button } from "components";
import { useScreenSize } from "hooks";

const PhoneNumberWindow: React.FC<React.ComponentProps<typeof Window>> = ({
  ...props
}): ReactElement => {
  const { height, width } = useScreenSize();
  const [windowHeight, setWindowHeight] = useState(130);
  const [windowWidth, setWindowWidth] = useState(260);
  return (
    <Window
      {...props}
      enableResizing={false}
      width={width}
      height={windowHeight}
      x={width < 500 ? width * 0.06 : width * 0.4}
      y={height * 0.1}
      title={<p>Contact Me - Phone Number </p>}
    >
      <div className="bg-spring-wood flex flex-col py-5  gap-3 px-4 h-auto w-full cursor-xp">
        {console.log(width)}
        <div className="flex flex-row items-center gap-5 cursor-pointer">
          <img
            src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-221.ico"
            alt="Info icon"
            className="h-7 w-8"
          />
          <p className="text-[12px] w-96">Phone Number: +251966751230</p>
        </div>
        <div className="w-full flex flex-row gap-1 justify-center items-center">
          <a href="tel:+251966751230">
            <Button>Call Me</Button>
          </a>
        </div>
      </div>
    </Window>
  );
};

export default PhoneNumberWindow;

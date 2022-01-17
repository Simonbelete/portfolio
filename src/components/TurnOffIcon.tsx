import React, { ReactElement } from "react";

enum Sizes {
  large = "large",
  medium = "medium",
}

const TurnOffIcon: React.FC<{ size?: Sizes }> = ({
  size = Sizes.medium,
}): ReactElement => {
  return (
    <div
      className={`flex flex-row gap-1 items-center justify-center pr-3 pl-1 text-white cursor-pointer ${
        size == Sizes.large ? "" : "hover:bg-primary"
      }`}
    >
      <img
        src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-027.ico"
        alt="Log Off"
        className="aspect-square h-6 w-6"
      />
      <p
        className={`font-tahoma text-white font-normal ${
          size == Sizes.large ? "text-[19px] hover:underline" : "text-[11px]"
        }`}
      >
        Turn Off Computer
      </p>
    </div>
  );
};

const TurnOffIconObject = Object.assign(TurnOffIcon, { Sizes });

export default TurnOffIconObject;

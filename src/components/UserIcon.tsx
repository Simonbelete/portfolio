import React, { ReactElement } from "react";

const UserIcon: React.FC<{
  name?: string;
  image?: string;
  screen?: string;
}> = ({
  name,
  image,
  screen = "home", // home | lock
}): ReactElement => {
  if (screen === "home")
    return (
      <div className="flex flex-row items-center gap-2">
        <span className="cursor-pointer">
          <img
            src={image}
            alt={name}
            className="aspect-square w-[55px] h-[55px] border-[2px] border-white rounded"
          />
        </span>
        <p
          className="text-white font-tahoma text-lg font-bold"
          style={{ textShadow: "1px 2px black" }}
        >
          {name}
        </p>
      </div>
    );
  else
    return (
      <div
        className="flex flex-row w-[350px] gap-2 px-2 py-2 rounded-lg border-l-[1px] border-[#9CB2EA]"
        style={{
          background: "linear-gradient(to right, #1242A6, #658ced)",
        }}
      >
        <img
          src={image}
          alt={name}
          className="aspect-square w-[55px] h-[55px] border-[2px] border-white rounded"
        />
        <div className="flex flex-col gap-0">
          <p
            className="text-white text-[17px]"
            style={{ textShadow: "1px 2px black" }}
          >
            {name}
          </p>
          <p className="text-white font-bold text-[11px]">Logged on</p>
        </div>
      </div>
    );
};

export default UserIcon;

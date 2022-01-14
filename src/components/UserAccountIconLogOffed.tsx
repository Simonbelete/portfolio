import React, { ReactElement } from "react";

const UserAccountIconLogOffed: React.FC<{ name: string; image: string }> = ({
  name,
  image,
}): ReactElement => {
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

export default UserAccountIconLogOffed;

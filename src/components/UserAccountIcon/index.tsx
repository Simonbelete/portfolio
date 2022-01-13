import React, { ReactElement } from "react";

const UserAccountIcon: React.FC<{ name: string; image: string }> = ({
  name,
  image,
}): ReactElement => {
  return (
    <div className="flex flex-row items-center gap-2">
      <img
        src={image}
        alt={name}
        className="aspect-square w-[55px] h-[55px] border-[2px] border-white rounded"
      />
      <p
        className="text-white text-[17px] font-tahoma font-bold"
        style={{ textShadow: "1px 2px black" }}
      >
        {name}
      </p>
    </div>
  );
};

export default UserAccountIcon;

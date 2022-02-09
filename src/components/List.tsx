import React, { ReactElement } from "react";

const List: React.FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}): ReactElement => {
  return <ul className="w-full">{children}</ul>;
};

const Title: React.FC<{ children: ReactElement | ReactElement[] | string }> = ({
  children,
}): ReactElement => {
  return (
    <li
      className="px-1 py-[1px] text-[#215DC6] font-tahoma text-[12px]"
      style={{ background: "linear-gradient(to right, white, #C7D4F7 124%)" }}
    >
      {children}
    </li>
  );
};

const Item: React.FC<{ children: ReactElement | ReactElement | string }> = ({
  children,
}): ReactElement => {
  return (
    <div className="bg-[#EEF2FB]">
      <li>{children}</li>
    </div>
  );
};

const ListObject = Object.assign(List, { Title, Item });

export default ListObject;

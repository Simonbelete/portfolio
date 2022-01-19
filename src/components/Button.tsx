import React, { ReactElement } from "react";

const Button: React.FC<{ children: string }> = ({ children }): ReactElement => {
  return (
    <button
      type="button"
      className="font-tahoma text-[12px] bg-[#F4F4F0] box-border min-w-[75px] min-h-[23px] px-[12px] border border-black hover:outline hover:outline-2 hover:outline-offset-[-3px] hover:outline-[#E59700]"
    >
      {children}
    </button>
  );
};

export default Button;

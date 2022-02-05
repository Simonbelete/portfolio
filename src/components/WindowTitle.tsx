import React, { ReactElement } from "react";

const WindowTitle: React.FC<{ iconUrl: string; children: string }> = ({
  iconUrl,
  children,
}): ReactElement => {
  return (
    <div className="truncate inline-flex flex-row gap-1 items-center mt-2">
      <img src={iconUrl} alt={children} className="h-5 w-5" />
      <p className="text-[11px] text-white font-bold">{children}</p>
    </div>
  );
};

export default WindowTitle;

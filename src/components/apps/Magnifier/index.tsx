import React, { ReactElement } from "react";

const Magnifier: React.FC = (): ReactElement => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-[100px] border border-white"></div>
  );
};

export default Magnifier;

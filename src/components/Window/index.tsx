import React, { ReactElement } from "react";
import { Rnd } from "react-rnd";

const Window: React.FC = (): ReactElement => {
  return (
    <Rnd
      default={{
        x: 500,
        y: 500,
        width: 320,
        height: 200,
      }}
      bounds="parent"
    >
      <div className="w-full h-full bg-white">a</div>
    </Rnd>
  );
};

export default Window;

import React, { ReactElement } from "react";
import { Rnd } from "react-rnd";

const Window: React.FC = (): ReactElement => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 320,
        height: 200,
      }}
      size={{ height: 50, width: 50 }}
      enableResizing={false}
      bounds="parent"
    >
      <div className="w-full h-full bg-white">a</div>
    </Rnd>
  );
};

export default Window;

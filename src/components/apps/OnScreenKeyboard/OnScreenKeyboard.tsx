import React, { ReactElement } from "react";
import { Window } from "components";

const Key: React.FC<{ children: string }> = ({ children }): ReactElement => {
  return <div className="bg-white text-base font-bold">{children}</div>;
};

const OnScreenKeyboard: React.FC = (): ReactElement => {
  return (
    <Window>
      <div className="bg-mariner-1">
        {/* Function Keys */}
        <div className="flex flex-row gap-2">
          <Key>esc</Key>
        </div>
      </div>
    </Window>
  );
};

export default OnScreenKeyboard;

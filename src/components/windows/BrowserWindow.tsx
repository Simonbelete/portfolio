import React, { ReactElement } from "react";
import { Window } from "components";

const PageNotFound: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <div>
        <img src="" alt="Info Icon" />
        <p>The Page cannot be displayed</p>
      </div>
    </div>
  );
};

const BrowserWindow: React.FC<React.ComponentProps<typeof Window>> = ({
  ...props
}): ReactElement => {
  return (
    <Window {...props}>
      <div className="bg-white flex h-auto w-full">
        {/* <PageNotFound /> */}a
      </div>
    </Window>
  );
};

export default BrowserWindow;

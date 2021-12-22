import React, { ReactElement } from "react";

const Folder: React.FC<{ shortcut?: boolean; open?: boolean; name?: string }> =
  ({ shortcut = false, open = false, name = "New Folder" }): ReactElement => {
    return (
      <div className="inline-flex flex-col justify-center items-center gap-2">
        {open === true ? (
          <img
            src="/folder_open.ico"
            alt="Folder Closed"
            className="aspect-square"
          />
        ) : (
          <img
            src="/folder_closed.ico"
            alt="Folder Closed"
            className="aspect-square h-8 w-8"
          />
        )}
        <p className="text-xs text-white" style={{ textShadow: "2px" }}>
          {name}
        </p>
      </div>
    );
  };

export default Folder;

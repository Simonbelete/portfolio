import React, { ReactElement } from "react";
import { Rnd } from "react-rnd";

const Folder: React.FC<{ shortcut?: boolean; open?: boolean; name?: string }> =
  ({ shortcut = false, open = false, name = "New Folder" }): ReactElement => {
    return (
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: "auto",
          height: 200,
        }}
        enableResizing={false}
        bounds="parent"
      >
        <div className="inline-flex flex-col justify-center items-center gap-1">
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
          <p
            className="text-xs text-white"
            style={{
              textShadow: "0.1em 1px 1px black",
              fontSize: "0.7em",
              letterSpacing: "-0.025em",
            }}
          >
            {name}
          </p>
        </div>
      </Rnd>
    );
  };

export default Folder;

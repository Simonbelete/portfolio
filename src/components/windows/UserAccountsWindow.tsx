import React, { ReactElement } from "react";
import { Window, FolderAlt } from "components";
import { useScreenSize } from "hooks";

const UserAccountsWindow: React.FC<React.ComponentProps<typeof Window>> = ({
  ...props
}): ReactElement => {
  const { height, width } = useScreenSize();
  return (
    <Window
      {...props}
      enableResizing={false}
      width={600}
      height={500}
      x={width < 500 ? width * 0.06 : width * 0.4}
      y={height * 0.1}
      title={<p>User Accounts</p>}
    >
      <>
        <Window.ExploreBar>
          <p>Hello</p>
        </Window.ExploreBar>
        <Window.Body>
          <p>Windows</p>
        </Window.Body>
      </>
    </Window>
  );
};

export default UserAccountsWindow;

import { TaskBar } from "components";
import React, { ReactElement } from "react";

const HomeScreen: React.FC<{
  background?: string;
  children: ReactElement | ReactElement[];
}> = ({ background = "/backgrounds/bliss.jpg", children }): ReactElement => {
  return (
    <div
      className="w-screen h-screen  aspect-square bg-cover"
      style={{
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full w-full relative overflow-hidden">
        <div className="w-full h-full relative mx-0 py-0">{children}</div>
        <TaskBar />
      </div>
    </div>
  );
};

export default HomeScreen;

import React, { ReactElement } from "react";

const HomeScreen: React.FC<{
  background?: string;
}> = ({ background = "/backgrounds/bliss.jpg" }): ReactElement => {
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
        <div className="w-full h-full"></div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[32px]"></div>
      </div>
    </div>
  );
};

export default HomeScreen;

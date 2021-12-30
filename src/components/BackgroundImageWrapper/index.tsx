import React, { ReactElement } from "react";

const BackgroundImageWrapper: React.FC<{
  children: ReactElement | ReactElement[];
  background?: string;
}> = ({ children, background = "/backgrounds/bliss.jpg" }): ReactElement => {
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
      {children}
    </div>
  );
};

export default BackgroundImageWrapper;

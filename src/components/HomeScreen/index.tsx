import React, { ReactElement } from "react";

const HomeScreenComponent: React.FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }): ReactElement => {
  return (
    <div className="h-full w-full relative overflow-hidden">{children}</div>
  );
};

const Body: React.FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}): ReactElement => {
  return <div className="w-full h-full mb-10">{children}</div>;
};

const Footer: React.FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}): ReactElement => {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-[32px]">
      {children}
    </div>
  );
};

const HomeScreen = Object.assign(HomeScreenComponent, { Body, Footer });

export default HomeScreen;

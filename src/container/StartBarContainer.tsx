import React, { ReactElement } from "react";
import { useAppDispatch } from "hooks";
import { StartBar } from "components";
// import { toggleStartMenu } from "rootSlice";

const StartBarContainer: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const onStartMenuClick = () => {
    console.log("hello");
    // dispatch(toggleStartMenu());
  };
  return <StartBar onClick={onStartMenuClick} />;
};

export default StartBarContainer;

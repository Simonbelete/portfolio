import React, { ReactElement } from "react";

const AccountPictureManager: React.FC = (): ReactElement => {
  const imagesList: String[] = [
    "airplane.png",
    "astronaut.png",
    "ball.png",
    "beach_chairs.png",
    "butterfly.png",
    "car.png",
    "cat.png",
    "Chess_Pieces.png",
    "dirt_bike.png",
    "friendly_dog.png",
    "drip.png",
    "rubber_ducky.png",
    "fish.png",
    "frog.png",
    "guitar.png",
    "running_horses.png",
    "kick.png",
    "rocket_launch.png",
    "palm_trees.png",
    "pink_flower.png",
    "orange_daisy.png",
    "skateboarder.png",
    "snowflake.png",
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#7294DF]">Pick a new picture for your account</p>
      <p className="text-sm text-black"></p>
    </div>
  );
};

export default AccountPictureManager;

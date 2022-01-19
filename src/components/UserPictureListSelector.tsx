import React, { ReactElement } from "react";

const UserPictureListSelector: React.FC = (): ReactElement => {
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
    <div className="grid grid-cols-7 gap-4 border border-black px-5 py-10 h-52 overflow-y-scroll">
      {imagesList.map((_) => (
        <div>
          <img
            src={`/user_pictures/${_}`}
            alt={`${_}`}
            className="aspect-square w-[55px] h-[55px]"
          />
        </div>
      ))}
    </div>
  );
};

export default UserPictureListSelector;

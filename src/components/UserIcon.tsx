import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { addWindow } from "rootSlice";
import { WINDOWS, UserAccountsWindow } from "components/windows";

const UserIcon: React.FC<{
  image?: string;
  screen?: string;
}> = ({
  image,
  screen = "home", // home | lock
}): ReactElement => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.RootReducer);

  // TODO: Redundent code
  const findInstanceIndex = (o: any) => {
    for (var i = 0; i < WINDOWS.length; i = i + 1) {
      if (WINDOWS[i].component({}).type === o) {
        return WINDOWS[i].id;
      }
    }
    return -1;
  };

  const openUserWindow = () => {
    dispatch(addWindow(findInstanceIndex(UserAccountsWindow)));
  };

  if (screen === "home")
    return (
      <div className="flex flex-row items-center gap-2">
        <span className="cursor-pointer" onClick={openUserWindow}>
          <img
            src={user.image}
            alt={user.name}
            className="aspect-square w-[55px] h-[55px] border-[2px] border-white rounded"
          />
        </span>
        <p
          className="text-white font-tahoma text-lg font-bold"
          style={{ textShadow: "1px 2px black" }}
        >
          {user.name}
        </p>
      </div>
    );
  else
    return (
      <div
        className="flex flex-row w-[350px] gap-2 px-2 py-2 rounded-lg border-l-[1px] border-[#9CB2EA]"
        style={{
          background: "linear-gradient(to right, #1242A6, #658ced)",
        }}
      >
        <img
          src={user.image}
          alt={user.name}
          className="aspect-square w-[55px] h-[55px] border-[2px] border-white rounded"
        />
        <div className="flex flex-col gap-0">
          <p
            className="text-white text-[17px]"
            style={{ textShadow: "1px 2px black" }}
          >
            {user.name}
          </p>
          <p className="text-white font-bold text-[11px]">Logged on</p>
        </div>
      </div>
    );
};

export default UserIcon;

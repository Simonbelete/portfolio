import React, { ReactElement } from "react";
import { GlowLine, Logo, UserIcon } from "components";

const LockScreen: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      {/* Header */}
      <div className="h-[8%] bg-[#00309C] flex justify-items-end" />
      <GlowLine colors={["#00309C, #B4CDF9, #00309C"]} />

      {/* Body */}
      <div
        className="h-[84%] flex items-center justify-center py-10 gap-6"
        style={{
          background:
            "radial-gradient(farthest-side at -71px 41px, #e9edf5, #658ced, #658ced, #658ced, #658ced)",
        }}
      >
        <div className="flex flex-col place-items-end gap-3">
          <Logo.Window size={150} />
          <p className="text-lg text-white mr-7">
            To begin, click your user name
          </p>
        </div>
        <GlowLine horizontal colors={["#658ced", "#91AEEE", "#658ced"]} />
        <UserIcon
          screen="lock"
          image="/user_pictures/Chess_Pieces.png"
          name="Simon Belete"
        />
      </div>
      {/* Footer */}
      <GlowLine colors={["#203A97, #ED943F 50%, #26408C"]} />
      <div
        className="h-[8%] bg-[#00309C] flex px-8 pb-5 justify-between"
        style={{ background: "linear-gradient(to right, #3833AC, #07309E)" }}
      >
        {/* <TurnOffIcon size={TurnOffIcon.Sizes.large} /> */}
        <div
          className={`flex flex-row gap-1 items-center justify-center pr-3 pl-1 text-white cursor-pointer ${
            true ? "" : "hover:bg-primary"
          }`}
        >
          <img
            src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-027.ico"
            alt="Log Off"
            className="aspect-square h-6 w-6"
          />
          <p
            className={`font-tahoma text-white font-normal ${
              true ? "text-[19px] hover:underline" : "text-[11px]"
            }`}
          >
            Turn Off Computer
          </p>
        </div>
        <p className="text-white text-[12px] mt-4 font-tahoma">
          After you log on, you can add or change accounts, <br />
          Just go to control Panel and click User Accounts.
        </p>
      </div>
    </div>
  );
};

export default LockScreen;

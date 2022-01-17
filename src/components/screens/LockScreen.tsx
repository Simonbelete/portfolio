import React, { ReactElement } from "react";
import {
  GlowLine,
  LogOffText,
  UserAccountIconLogOffed,
  TurnOffIcon,
} from "components";

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
        <LogOffText />
        <GlowLine horizontal colors={["#658ced", "#91AEEE", "#658ced"]} />
        <UserAccountIconLogOffed
          image="/use_pictures/Chess_Pieces.png"
          name="Simon Belete"
        />
      </div>
      {/* Footer */}
      <GlowLine colors={["#203A97, #ED943F 50%, #26408C"]} />
      <div
        className="h-[8%] bg-[#00309C] flex justify-between"
        style={{ background: "linear-gradient(to right, #3833AC, #07309E)" }}
      >
        <TurnOffIcon size={TurnOffIcon.Sizes.large} />
      </div>
    </div>
  );
};

export default LockScreen;

import React, { ReactElement } from "react";

const WelcomeScreen: React.FC = (): ReactElement => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col gap-24 items-center justify-center m-auto h-full relative">
        {/* Header */}
        <div className="bg-[#00309c] absolute top-0 w-full h-16 flex justify-center items-end">
          {/* <div className="w-1/2 bg-white h-[1px] "></div> */}
        </div>
        {/* Body */}
        <div
          className="h-full w-full flex items-center justify-center m-auto"
          style={{
            background:
              "radial-gradient(farthest-side at 5px 5px, #e9edf5, #658ced, #658ced, #658ced, #658ced)",
          }}
        >
          <h1 className="text-white font-black text-2xl italic">Welcome</h1>
        </div>
        {/* Footer  */}
        <div
          className="absolute bottom-0 w-full h-16 flex justify-center"
          style={{
            background: "linear-gradient(to right, #3c05a9 30%, #00309c)",
          }}
        >
          {/* <div className="w-1/2 bg-yellow-600 h-[1px]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

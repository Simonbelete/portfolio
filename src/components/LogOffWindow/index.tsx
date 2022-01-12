import React, { ReactElement } from "react";

const LogOffWindow: React.FC = (): ReactElement => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="inline-block align-bottom bg-white transform transition-all w-96 border border-black h-56 flex-row justify-between">
          {/* Header */}
          <div className="bg-[#003399] h-[20%] flex flex-row items-center justify-between px-3">
            <p className="text-white text-xl">Log Off Windows</p>
          </div>
          {/* Body */}
          <div
            className="bg-[#003399] h-[60%] flex flex-row gap-14 items-center justify-center m-auto"
            style={{
              background:
                "linear-gradient(90deg, rgba(90,125,222,1) 0%, rgba(148,178,243,1) 50%, rgba(90,125,222,1) 100%)",
            }}
          >
            <div className="flex flex-col gap-2 items-center justify-center pr-3 pl-1 text-white hover:brightness-105">
              <img
                src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-170.ico"
                alt="Log Off"
                className="aspect-square h-10 w-10"
              />
              <p className="font-tahoma text-[13px] text-white">Switch User</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center pr-3 pl-1 text-white hover:brightness-105">
              <img
                src="/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-044.ico"
                alt="Log Off"
                className="aspect-square h-10 w-10"
              />
              <p className="font-tahoma text-[13px] text-white">Log Off</p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#003399] h-[20%] flex justify-end items-center px-4">
            Cancle
          </div>

          {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div> */}
        </div>
      </div>
    </div>

    // <div classNameName="z-[9999] w-screen h-screen bg-transparent bg-gray-600 flex items-center justify-center m-auto">
    //   <div classNameName="border border-black h-52 flex flex-row justify-between">
    //     {/* Header */}
    //     <div classNameName="bg-[#003399] h-[10%]"></div>
    //     {/* Body */}
    //     <div
    //       classNameName="bg-[#003399] h-[800%]"
    //       style={{ background: "linear-gradient(#5B7EDF, white, #5B7EDF)" }}
    //     ></div>

    //     {/* Footer */}
    //     <div classNameName="bg-[#003399] h-[10%] flex justify-end">Cancle</div>
    //   </div>
    // </div>
  );
};

export default LogOffWindow;

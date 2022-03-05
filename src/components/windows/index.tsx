import GrettingWindow from "./GrettingWindow";
import BrowserWindow from "./BrowserWindow";
import PhoneNumberWindow from "./PhoneNumberWindow";
import GithubWindow from "./GithubWindow";
import WorksWindow from "./WorksWindow";

export const WINDOWS = [
  {
    id: 0,
    component: ({ ...props }) => <GrettingWindow {...props} />,
    toolBarIcon: "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-070.ico",
    title: "Gretting - Welcome",
  },
  {
    id: 1,
    component: ({ ...props }) => <PhoneNumberWindow {...props} />,
    toolBarIcon: "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-221.ico",
    title: "Contact Me - Phone Number",
  },
  {
    id: 2,
    component: ({ ...props }) => <GithubWindow {...props} />,
    toolBarIcon: "/images/github-logo.png",
    title: "",
  },
  {
    id: 3,
    component: ({ ...props }) => <WorksWindow {...props} />,
    toolBarIcon: "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-126.ico",
    title: "Portfolio",
  },
];

export {
  GrettingWindow,
  BrowserWindow,
  PhoneNumberWindow,
  GithubWindow,
  WorksWindow,
};

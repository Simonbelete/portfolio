// export { default as GrettingWindow } from "./GrettingWindow";
import GrettingWindow from "./GrettingWindow";
import BrowserWindow from "./BrowserWindow";
import PhoneNumberWindow from "./PhoneNumberWindow";
import GithubWindow from "./GithubWindow";
import WorksWindow from "./WorksWindow";

export const WINDOWS = [
  {
    id: 0,
    component: ({ ...props }) => <GrettingWindow {...props} />,
  },
  {
    id: 1,
    component: ({ ...props }) => <PhoneNumberWindow {...props} />,
  },
  {
    id: 2,
    component: ({ ...props }) => <GithubWindow {...props} />,
  },
  {
    id: 3,
    component: ({ ...props }) => <WorksWindow {...props} />,
  },
];

export {
  GrettingWindow,
  BrowserWindow,
  PhoneNumberWindow,
  GithubWindow,
  WorksWindow,
};

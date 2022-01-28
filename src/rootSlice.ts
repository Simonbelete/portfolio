import { createSlice } from "@reduxjs/toolkit";

// Enums
export enum Types {
  FOLDER = "FOLDER",
  GITHUB = "GITHUB",
  BROWSER = "BROWSER",
}

// Interfaces
interface Windows {
  id: number;
  minimized: boolean;
  focused: boolean;
  type: Types;
}

interface Desktops {
  id: number;
  iconUrl: string;
  // type: DesktopType;
  shortcut: boolean;
  name: string;
  window: Windows | null;
  x: number;
  y: number;
}

interface UserProfile {
  image: string;
  name: string;
}

interface RootState {
  background: string;
  user: UserProfile;
  windows: Windows[];
  desktops: Desktops[];
}

// Init state
const initialState: RootState = {
  background: "/backgrounds/bliss.jpg",
  user: {
    image: "/user_pictures/Chess_Pieces.png",
    name: "Simon Belete",
  },
  windows: [
    {
      id: 1,
      minimized: false,
      focused: true,
      type: Types.FOLDER,
    },
  ],
  desktops: [
    {
      id: 1,
      iconUrl: "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-003.ico",
      name: "New Folder",
      shortcut: false,
      window: null,
      x: 0,
      y: 0,
    },
    {
      id: 2,
      iconUrl: "/images/github-logo.png",
      name: "Github \n (Simonbelete)",
      shortcut: false,
      window: null,
      x: 0,
      y: 70,
    },
  ],
};

export const rootSlice = createSlice({
  name: "rootState",
  initialState,
  reducers: {},
});

export const {} = rootSlice.actions;

export default rootSlice.reducer;

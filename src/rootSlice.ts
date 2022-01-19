import { createSlice } from "@reduxjs/toolkit";

// Enums
export enum DesktopType {
  FOLDER = "FOLDER",
  GITHUB = "GITHUB",
}

// Interfaces
interface Windows {
  id: number;
  minimized: boolean;
  focused: boolean;
}

interface Desktops {
  id: number;
  iconUrl: string;
  type: DesktopType;
  shortcut: boolean;
  name: string;
  window: Windows | null;
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
    image: "/use_pictures/Chess_Pieces.png",
    name: "Simon Belete",
  },
  windows: [
    {
      id: 1,
      minimized: false,
      focused: true,
    },
  ],
  desktops: [
    {
      id: 1,
      iconUrl: "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-003.ico",
      type: DesktopType.FOLDER,
      name: "New Folder",
      shortcut: false,
      window: null,
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

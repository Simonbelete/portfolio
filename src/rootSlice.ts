import { createSlice } from "@reduxjs/toolkit";

// Enums
export enum DesktopType {
  FOLDER = "FOLDER",
}

// Interfaces
interface Windows {
  id: number;
  minimized: boolean;
  focused: boolean;
}

interface Desktops {
  id: number;
  type: DesktopType;
  shortcut: boolean;
  name: string;
  window: Windows | null;
}

interface RootState {
  windows: Windows[];
  desktops: Desktops[];
}

// Init state
const initialState: RootState = {
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
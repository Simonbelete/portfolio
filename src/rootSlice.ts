import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GrettingWindow } from "components/windows";
import { ReactElement } from "react";

export enum Types {
  WELCOME_WINDOW = "WELCOME_WINDOW",
  PHONE_NUMBER_WINDOW = "PHONE_NUMBER_WINDOW",
  BROWSER_WINDOW = "BROWSER_WINDOW",
  GITHUB_WINDOW = "GITHUB_WINDOW",
  WORKS_WINDOW = "WORKS_WINDOW",
}

export interface Windows {
  minimized?: boolean;
  focused?: boolean;
  component: any;
}

interface RootState {
  windows: Windows[];
}

// Init statedefault
const initialState: RootState = {
  windows: [
    {
      component: GrettingWindow,
      minimized: false,
    },
  ],
};

export const rootSlice = createSlice({
  name: "rootState",
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<Windows>) => {
      // if (!state.windows.some((w) => w.type === action.payload.type))
      //   state.windows = [...state.windows, action.payload];
    },
    minimizeWindow: (state, action: PayloadAction<number>) => {
      const cp = state.windows;
      cp[action.payload].minimized = true;
      state.windows = cp;
    },
    maximizeWindow: (state, action: PayloadAction<number>) => {
      const cp = state.windows;
      cp[action.payload].minimized = false;
      state.windows = cp;
    },
    removeWindow: (state, action: PayloadAction<number>) => {
      const cp = state.windows;
      cp.splice(action.payload, 1);
      state.windows = cp;
    },
  },
});

export const { addWindow, minimizeWindow, maximizeWindow, removeWindow } =
  rootSlice.actions;

export default rootSlice.reducer;

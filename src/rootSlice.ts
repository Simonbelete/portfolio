import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WINDOWS } from "components/windows";

export interface Windows {
  id: number; // Refers to WINDOWS in components/windows
  minimized?: boolean;
  focused?: boolean;
}

export interface Desktops {
  id: number;
}

interface RootState {
  windowsSequence: number[];
  windows: Windows[];
  desktops: Desktops[];
}

// Init statedefault
const initialState: RootState = {
  windowsSequence: [0],
  windows: [
    {
      id: 0,
      minimized: false,
    },
  ],
  desktops: [],
};

export const rootSlice = createSlice({
  name: "rootState",
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<number>) => {
      if (!state.windows.some((w) => w.id === action.payload)) {
        state.windows = [
          ...state.windows,
          { id: action.payload, minimized: false },
        ];
        state.windowsSequence = [
          ...state.windowsSequence,
          state.windows.length - 1,
        ];
      }
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
      // Set Window up front
      const wc = state.windowsSequence;
      wc.splice(wc.indexOf(action.payload), 1);
      state.windowsSequence = [...wc, action.payload];
    },
    removeWindow: (state, action: PayloadAction<number>) => {
      const cp = state.windows;
      cp.splice(action.payload, 1);
      state.windows = cp;
    },
    setActiveWindow: (state, action: PayloadAction<number>) => {
      const wc = state.windowsSequence;
      wc.splice(wc.indexOf(action.payload), 1);
      state.windowsSequence = [...wc, action.payload];
    },
    moveWindowToTop: (state, action: PayloadAction<number>) => {
      const cp = state.windows;
      const w = state.windows[action.payload];
      cp.splice(action.payload, 1);
      state.windows = [...cp, w];
    },
  },
});

export const {
  addWindow,
  minimizeWindow,
  maximizeWindow,
  removeWindow,
  setActiveWindow,
  moveWindowToTop,
} = rootSlice.actions;

export default rootSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Types {
  WELCOME_WINDOW = "WELCOME_WINDOW",
  PHONE_NUMBER_WINDOW = "PHONE_NUMBER_WINDOW",
}

export interface Windows {
  minimized?: boolean;
  focused?: boolean;
  type: Types;
}

interface RootState {
  windows: Windows[];
}

// Init statedefault
const initialState: RootState = {
  windows: [
    {
      type: Types.WELCOME_WINDOW,
      minimized: false,
    },
  ],
};

export const rootSlice = createSlice({
  name: "rootState",
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<Windows>) => {
      if (!state.windows.some((w) => w.type === action.payload.type))
        state.windows = [...state.windows, action.payload];
    },
    removeWindow: (state, action: PayloadAction<Windows>) => {
      const newWindows = state.windows.filter(
        (x) => x.type !== action.payload.type
      );
      state.windows = newWindows;
    },
  },
});

export const { addWindow } = rootSlice.actions;

export default rootSlice.reducer;

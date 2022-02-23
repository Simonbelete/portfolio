import { createSlice } from "@reduxjs/toolkit";

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
    {
      type: Types.PHONE_NUMBER_WINDOW,
      minimized: false,
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

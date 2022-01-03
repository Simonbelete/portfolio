import { createSlice } from "@reduxjs/toolkit";

interface RootState {
  isStartMenuOpen: boolean;
}

const initialState: RootState = {
  isStartMenuOpen: false,
};

export const rootSlice = createSlice({
  name: "rootState",
  initialState,
  reducers: {
    toggleStartMenu: (state) => {
      state.isStartMenuOpen = !state.isStartMenuOpen;
    },
  },
});

export const { toggleStartMenu } = rootSlice.actions;

export default rootSlice.reducer;

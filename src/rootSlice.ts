import { createSlice } from "@reduxjs/toolkit";

interface RootState {}

// Init statedefault
const initialState: RootState = {};

export const rootSlice = createSlice({
  name: "rootState",
  initialState,
  reducers: {},
});

export const {} = rootSlice.actions;

export default rootSlice.reducer;

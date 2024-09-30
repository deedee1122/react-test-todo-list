import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TailwindThemeType, ISystemState } from "../../_Types";
import { initialSystemState } from "../initialStates";

export const systemSlice = createSlice({
  name: "system",
  initialState: initialSystemState,
  reducers: {
    themeSwitch: (
      state: ISystemState,
      action: PayloadAction<TailwindThemeType>
    ) => {
      state.mode = action.payload;
    },
    resetSystem: () => initialSystemState,
  },
});

export const { themeSwitch, resetSystem } = systemSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITaskData } from "../../_Types";
import { initialTaskState } from "../initialStates";

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState: initialTaskState,
  reducers: {
    addTask: (state: ITaskData[], action: PayloadAction<ITaskData>) => {
      state.push(action.payload);
    },
    updateTask: (state: ITaskData[], action: PayloadAction<ITaskData>) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeTask: (state: ITaskData[], action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    resetTaskList: () => initialTaskState,
  },
});

export const { addTask, removeTask, resetTaskList, updateTask } =
  taskSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITaskData } from "../../_Types";
import { initialTaskState } from "../initialStates";

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState: initialTaskState,
  reducers: {
    addTask: (state, action: PayloadAction<ITaskData>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<ITaskData>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    // removeTask: (state, action: PayloadAction<string>) => {
    //   return state.tasks.filter((task) => task.id !== action.payload);
    // },
    resetTaskList: () => initialTaskState,
  },
});

export const {
  addTask,
  // removeTask,
  resetTaskList,
  updateTask,
} = taskSlice.actions;

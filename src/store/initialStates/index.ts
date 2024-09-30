import {
  ISystemState,
  ITaskData,
  TaskPriorityEnum,
  TaskStatusEnum,
  ThemeTypesEnum,
} from "../../_Types";
import { nanoid } from "@reduxjs/toolkit";

export const initialSystemState: ISystemState = {
  mode: ThemeTypesEnum.LIGHT,
};

export const taskInitialState: ITaskData = {
  id: nanoid(),
  taskName: "",
  dueDate: new Date(),
  status: TaskStatusEnum.PENDING,
  priority: TaskPriorityEnum.MEDIUM,
};

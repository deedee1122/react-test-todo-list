import {
  ISystemState,
  ITaskData,
  TaskPriorityEnum,
  TaskStatusEnum,
  ThemeTypesEnum,
} from "../../_Types";

export const initialSystemState: ISystemState = {
  mode: ThemeTypesEnum.LIGHT,
};

export const taskInitialState: ITaskData = {
  taskName: "",
  dueDate: "",
  status: TaskStatusEnum.PENDING,
  priority: TaskPriorityEnum.MEDIUM,
};

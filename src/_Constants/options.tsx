import { TaskPriorityEnum, TaskStatusEnum } from "../_Types";

export const TaskStatusDropdownOptions = [
  {
    value: TaskStatusEnum.COMPLETED,
    label: TaskStatusEnum.COMPLETED,
  },
  {
    value: TaskStatusEnum.IN_PROGRESS,
    label: TaskStatusEnum.IN_PROGRESS,
  },
  { value: TaskStatusEnum.PENDING, label: TaskStatusEnum.PENDING },
];
export const TaskPriorityDropdownOptions = [
  {
    value: TaskPriorityEnum.HIGH,
    label: TaskPriorityEnum.HIGH,
  },
  {
    value: TaskPriorityEnum.MEDIUM,
    label: TaskPriorityEnum.MEDIUM,
  },
  { value: TaskPriorityEnum.LOW, label: TaskPriorityEnum.LOW },
];

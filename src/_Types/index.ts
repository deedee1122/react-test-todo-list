import { HTMLInputTypeAttribute } from "react";

export enum ThemeTypesEnum {
  DARK = "dark",
  LIGHT = "light",
}

export interface ISystemState {
  mode: TailwindThemeType;
}

export interface InputFieldType {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value?: string | number;
  onChange: (e: IHTMLInputTypeChange) => void;
  accept?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  label: string;
}

export enum TaskStatusEnum {
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
  PENDING = "pending",
}

export enum TaskPriorityEnum {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface ITaskData {
  taskName: string;
  dueDate: string;
  status: TaskStatusEnum;
  priority: TaskPriorityEnum;
}

export type TailwindThemeType = ThemeTypesEnum.DARK | ThemeTypesEnum.LIGHT;
export type IHTMLInputTypeChange = React.ChangeEvent<HTMLInputElement>;
export type IHTMLFormEvent = React.FormEvent<HTMLFormElement>;

import { HTMLInputTypeAttribute } from "react";
import { SelectSingleEventHandler } from "react-day-picker";

export enum ThemeTypesEnum {
  DARK = "dark",
  LIGHT = "light",
}

export interface ISystemState {
  mode: TailwindThemeType;
}

export interface InputFieldType extends IFormWrapperHOCProps {
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

export interface iDateFieldProps extends IFormWrapperHOCProps {
  date: Date;
  handleDateChange: SelectSingleEventHandler;
}

export interface IFormWrapperHOCProps {
  id?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  caption?: null | undefined | string | "" | JSX.Element;
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
  dueDate: Date;
  status: TaskStatusEnum;
  priority: TaskPriorityEnum;
}

export type TailwindThemeType = ThemeTypesEnum.DARK | ThemeTypesEnum.LIGHT;
export type IHTMLInputTypeChange = React.ChangeEvent<HTMLInputElement>;
export type IHTMLFormEvent = React.FormEvent<HTMLFormElement>;

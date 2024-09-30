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

export interface IDropdownOptions {
  value: string | number;
  label: string | number;
}

export interface IFormWrapperHOCProps {
  id?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  caption?: null | undefined | string | "" | JSX.Element;
}

export interface ITaskTable {
  data: ITaskData[];
  onEdit: () => void;
  onDelete: (id: string) => void;
}

export interface iSelectFieldProps extends IFormWrapperHOCProps {
  options: IDropdownOptions[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
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
  id: string;
  taskName: string;
  dueDate: Date;
  status: TaskStatusEnum;
  priority: TaskPriorityEnum;
}

export interface ITaskSheet {
  data: ITaskData;
  setData: (data: ITaskData) => void;
  trigger: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onSubmit: () => void;
}

export type TailwindThemeType = ThemeTypesEnum.DARK | ThemeTypesEnum.LIGHT;
export type IHTMLInputTypeChange = React.ChangeEvent<HTMLInputElement>;
export type IHTMLFormEvent = React.FormEvent<HTMLFormElement>;

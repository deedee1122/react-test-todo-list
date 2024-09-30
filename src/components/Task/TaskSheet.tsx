import { useState } from "react";
import { DateInput, InputField, SelectField } from "../Form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "../ui";
import { ITaskSheet, TaskPriorityEnum, TaskStatusEnum } from "../../_Types";
import { taskInitialState } from "../../store";
import {
  TaskPriorityDropdownOptions,
  TaskStatusDropdownOptions,
} from "../../_Constants";

export const TaskSheet = ({
  data,
  trigger,
  title,
  description,
  setData,
  buttonText,
  onSubmit,
}: ITaskSheet) => {
  const [sheetState, setSheetState] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.id]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
    setSheetState(false);
  };

  const onCancel = () => {
    setData(taskInitialState());
    setSheetState(false);
  };

  return (
    <Sheet open={sheetState} onOpenChange={setSheetState}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="grid gap-2 py-4">
          <InputField
            id="taskName"
            value={data?.taskName}
            placeholder="Task Name Here"
            label="Task Name"
            onChange={handleInputChange}
            type="text"
            required
          />
          <DateInput
            date={data?.dueDate}
            id="dueDate"
            label="Task Due Date"
            handleDateChange={(e) => setData({ ...data, dueDate: e as Date })}
            required
          />
          <SelectField
            id="status"
            label="status"
            value={data?.status}
            onValueChange={(e) =>
              setData({ ...data, status: e as TaskStatusEnum })
            }
            options={TaskStatusDropdownOptions}
            placeholder="Select a status"
            required
          />
          <SelectField
            id="priority"
            label="priority"
            value={data?.priority}
            onValueChange={(e) =>
              setData({ ...data, priority: e as TaskPriorityEnum })
            }
            options={TaskPriorityDropdownOptions}
            placeholder="Select a status"
            required
          />
          <div className="flex flex-col">
            <Button type="submit">{buttonText}</Button>
            <Button type="button" variant="link" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

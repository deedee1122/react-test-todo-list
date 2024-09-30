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
import { ITaskData, TaskPriorityEnum, TaskStatusEnum } from "../../_Types";
import { taskInitialState } from "../../store";

export const TaskSheet = ({
  data,
  trigger,
  title,
  description,
  setData,
  buttonText,
  onSubmit,
}: {
  data: ITaskData;
  setData: (data: ITaskData) => void;
  trigger: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onSubmit: () => void;
}) => {
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
            options={[
              {
                value: TaskStatusEnum.COMPLETED,
                label: TaskStatusEnum.COMPLETED,
              },
              {
                value: TaskStatusEnum.IN_PROGRESS,
                label: TaskStatusEnum.IN_PROGRESS,
              },
              { value: TaskStatusEnum.PENDING, label: TaskStatusEnum.PENDING },
            ]}
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
            options={[
              {
                value: TaskPriorityEnum.HIGH,
                label: TaskPriorityEnum.HIGH,
              },
              {
                value: TaskPriorityEnum.MEDIUM,
                label: TaskPriorityEnum.MEDIUM,
              },
              { value: TaskPriorityEnum.LOW, label: TaskPriorityEnum.LOW },
            ]}
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

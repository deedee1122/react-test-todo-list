import { useState } from "react";
import { DateInput, InputField } from "../Form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "../ui";
import { ITaskData } from "../../_Types";

export const TaskSheet = ({
  data,
  trigger,
  title,
  description,
  setData,
}: {
  data: ITaskData;
  setData: (data: ITaskData) => void;
  trigger: React.ReactNode;
  title: string;
  description: string;
}) => {
  const [sheetState, setSheetState] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.id]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
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
          <Button type="submit">Save changes</Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

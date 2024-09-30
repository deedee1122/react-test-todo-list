import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import {
  Button,
  Calendar,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui";
import { useState } from "react";
import { SelectSingleEventHandler } from "react-day-picker";

export const DateInput = ({
  disabled,
  id,
  label,
  date,
  handleDateChange,
}: {
  id?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  date: Date;
  handleDateChange: SelectSingleEventHandler;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover modal={true} open={open}>
      <PopoverTrigger className="flex gap-2 flex-col">
        <Label htmlFor={id} className="">
          {label}
        </Label>
        <Button
          variant={"outline"}
          disabled={disabled}
          onClick={() => setOpen(true)}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          disabled={disabled}
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
          captionLayout="dropdown-buttons"
          onDayClick={() => setOpen((x) => !x)}
          title="Pick a date"
        />
      </PopoverContent>
    </Popover>
  );
};

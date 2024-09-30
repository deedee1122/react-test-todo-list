import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui";
import { FormWrapperHOC } from "./_Templates";
import { iDateFieldProps } from "../../_Types";
import { FC, useState } from "react";

export const DateInput: FC<iDateFieldProps> = FormWrapperHOC(
  ({ date, handleDateChange, disabled }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
      <Popover modal={true} open={open}>
        <PopoverTrigger asChild>
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
            fromYear={1800}
            toYear={2024}
            captionLayout="dropdown-buttons"
            onDayClick={() => setOpen((x) => !x)}
            title="Pick a date"
          />
        </PopoverContent>
      </Popover>
    );
  },
);

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui";
import { IDropdownOptions } from "../../_Types";
import { iSelectFieldProps } from "../../_Types";
import { FormWrapperHOC } from "./_Templates";
import { cn } from "../../lib/utils";

export const SelectField = FormWrapperHOC(
  ({
    options,
    value,
    onValueChange,
    disabled = false,
    id,
    placeholder = "Select an option",
    className,
  }: iSelectFieldProps) => {
    return (
      <Select
        disabled={disabled}
        onValueChange={onValueChange}
        value={value}
        defaultValue=""
        required
        name={id}
      >
        <SelectTrigger className={cn("focus-visible:ring-[none]", className)}>
          <SelectValue
            className="focus-visible:ring-[none]"
            placeholder={
              <div className="text-slate-500 scroll-">{placeholder}</div>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options?.map((option: IDropdownOptions, index: number) => (
              <SelectItem key={index} value={option.value.toString()}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
);

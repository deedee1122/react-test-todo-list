import { Input, Label } from "../ui";
import { cn } from "../../lib/utils";
import { InputFieldType } from "../../_Types";

export const InputField = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
  disabled,
  accept,
  className,
  label,
}: InputFieldType) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className="">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn("focus-visible:ring-[none]", className)}
        required={required}
        disabled={disabled}
        accept={accept}
      />
    </div>
  );
};

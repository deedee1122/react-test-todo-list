import { InputFieldType } from "../../_Types";
import { Input } from "../ui";
import { FC } from "react";
import { FormWrapperHOC } from "./_Templates";
import { cn } from "../../lib/utils";

export const InputField: FC<InputFieldType> = FormWrapperHOC(
  ({
    id,
    type,
    placeholder,
    value,
    onChange,
    required,
    disabled,
    accept,
    className,
  }) => {
    return (
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
    );
  },
);

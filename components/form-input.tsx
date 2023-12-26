import React from "react";
import { Input } from "./ui/input";

interface FormInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput = ({ className, error, ...props }: FormInputProps) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2">
        <Input className={`${className}`} {...props} />
        {error && <small className="text-red-500">{error}</small>}
      </div>
    </>
  );
};

export default FormInput;

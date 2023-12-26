import React from "react";
import { Button } from "./ui/button";

interface FormButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "default" | "destructive" | "ghost" | "secondary" | "link";
}

const FormButton = ({ className, children, ...props }: FormButtonProps) => {
  return (
    <>
      <Button className={`${className}`} {...props}>
        {children}
      </Button>
    </>
  );
};

export default FormButton;

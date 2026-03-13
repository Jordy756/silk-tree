import { type ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary";
}

export const Button = ({ variant = "primary", className = "", children, ...rest }: Props) => {
  return (
    <button
      className={`btn-${variant} flex items-center justify-center gap-2 py-3 px-6 border rounded-sm cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

import type { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";

interface Props extends ComponentPropsWithoutRef<"a"> {
  to: string;
  variant?: "primary" | "secondary";
}

export const NavigationLink = ({
  to,
  variant = "primary",
  children,
  className = "",
  target = "_blank",
  ...rest
}: Props) => {
  return (
    <Link
      to={to}
      target={target}
      rel="noopener noreferrer"
      className={`btn-${variant} flex items-center justify-center gap-2 py-3 px-6 border rounded-sm cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

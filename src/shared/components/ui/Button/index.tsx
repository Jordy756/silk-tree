import { type ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "secondary" | "icon";
}

const Button = ({ variant, className = "", children, ...props }: Props) => {
  return (
    <button className={`${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

import { ButtonHTMLAttributes } from "react";
import "./index.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
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

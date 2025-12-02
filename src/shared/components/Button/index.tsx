import { ReactNode } from "react";
import "./index.css";

type Props = {
    className: "primary" | "secondary" | "icon";
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    children: ReactNode;
};

const Button = ({ className, type: buttonType, onClick, children }: Props) => {
    return (
        <button type={buttonType} className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

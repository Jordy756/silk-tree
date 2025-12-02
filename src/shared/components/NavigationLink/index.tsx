import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./index.css";

type Props = {
    className: "primary" | "secondary";
    to: string;
    children: ReactNode;
};

const NavigationLink = ({ className, to = "", children }: Props) => {
    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
};

export default NavigationLink;

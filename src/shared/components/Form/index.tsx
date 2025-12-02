import { UseFormHandleSubmit } from "react-hook-form";
import "./index.css";

type Props = {
    children: React.ReactNode;
    onSubmit: (data: any) => void;
    handleSubmit: UseFormHandleSubmit<any, undefined>;
};

const Form = ({ children, onSubmit, handleSubmit }: Props) => {
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    );
};

export default Form;

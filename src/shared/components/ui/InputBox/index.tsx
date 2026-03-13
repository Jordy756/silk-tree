import { FieldError } from "react-hook-form";
import { ReactElement } from "react";
import "./index.css";

export type Props = {
    labelText: string;
    error: FieldError | undefined;
    children: ReactElement<
        JSX.IntrinsicElements["input"] | JSX.IntrinsicElements["select"] | JSX.IntrinsicElements["textarea"]
    >;
};

const InputBox = ({ labelText, error, children }: Props) => {
    return (
        <div className="input__box">
            <fieldset>
                {children}
                <legend>{labelText}</legend>
            </fieldset>
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default InputBox;

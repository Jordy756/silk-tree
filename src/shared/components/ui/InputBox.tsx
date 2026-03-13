import { FieldError } from "react-hook-form";
import type { ReactElement, JSX } from "react";

export type Props = {
  labelText: string;
  error: FieldError | undefined;
  children: ReactElement<
    JSX.IntrinsicElements["input"] | JSX.IntrinsicElements["select"] | JSX.IntrinsicElements["textarea"]
  >;
};

export const InputBox = ({ labelText, error, children }: Props) => {
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

import type { FieldError } from "react-hook-form";
import type { ReactElement, JSX } from "react";

interface Props {
  label: string;
  htmlFor: string;
  error: FieldError | undefined;
  children: ReactElement<
    JSX.IntrinsicElements["input"] | JSX.IntrinsicElements["select"] | JSX.IntrinsicElements["textarea"]
  >;
}

export const InputBox = ({ label, htmlFor, error, children }: Props) => {
  return (
    <div className="">
      <div className="">
        {children}
        <label htmlFor={htmlFor} className="">{label}</label>
      </div>
      {error && <p className="">{error.message}</p>}
    </div>
  );
};

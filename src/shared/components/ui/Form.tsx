import type { UseFormHandleSubmit } from "react-hook-form";

type Props = {
  children: React.ReactNode;
  onSubmit: (data: unknown) => void;
  handleSubmit: UseFormHandleSubmit<any, undefined>;
};

export const Form = ({ children, onSubmit, handleSubmit }: Props) => {
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
};

import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"svg">;

export const LogoutIcon = ({ ...props }: Props) => {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8"
        color="currentColor"
      />
    </svg>
  );
};

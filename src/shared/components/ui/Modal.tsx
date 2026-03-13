import type { ReactNode, RefObject } from "react";
import CloseIcon from "@icons/CloseIcon";
import Button from "@components/Button";

type Props = {
  dialogRef: RefObject<HTMLDialogElement>;
  title: string;
  children: ReactNode;
  closeModal: () => void;
};

export const Modal = ({ dialogRef, title, children, closeModal }: Props) => {
  return (
    <dialog ref={dialogRef} className="standard__modal">
      <header>
        <h5>{title}</h5>
        <Button variant="icon" onClick={closeModal}>
          <CloseIcon width={24} height={24} color="var(--neutral-50)" />
        </Button>
      </header>
      <main>{children}</main>
    </dialog>
  );
};

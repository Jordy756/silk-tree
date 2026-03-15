import type { RefObject } from "react";
import { Button } from "@shared/components/ui";

interface Props {
  dialogRef: RefObject<HTMLDialogElement>;
  message: string;
  primaryButtonText: string;
  onConfirm: () => void;
  closeModal: () => void;
}

export const ConfirmationModal = ({ dialogRef, message, primaryButtonText, onConfirm, closeModal }: Props) => {
  return (
    <dialog ref={dialogRef} className="confirmation__modal">
      <h5>{message}</h5>
      <div>
        <Button
          onClick={() => {
            onConfirm();
            closeModal();
          }}
        >
          {primaryButtonText}
        </Button>
        <Button variant="secondary" onClick={closeModal}>
          Cancelar
        </Button>
      </div>
    </dialog>
  );
};

import { RefObject } from "react";
import Button from "../Button";
import "./index.css";

type Props = {
    dialogRef: RefObject<HTMLDialogElement>;
    message: string;
    primaryButtonText: string;
    onConfirm: () => void;
    closeModal: () => void;
};

const ConfirmationModal = ({ dialogRef, message, primaryButtonText, onConfirm, closeModal }: Props) => {
    return (
        <dialog ref={dialogRef} className="confirmation__modal">
            <h5>{message}</h5>
            <div>
                <Button
                    type="button"
                    className="primary"
                    onClick={() => {
                        onConfirm();
                        closeModal();
                    }}
                >
                    {primaryButtonText}
                </Button>
                <Button type="button" className="secondary" onClick={closeModal}>
                    Cancelar
                </Button>
            </div>
        </dialog>
    );
};

export default ConfirmationModal;

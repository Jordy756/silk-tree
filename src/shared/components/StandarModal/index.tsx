import { ReactNode, RefObject } from "react";
import CloseIcon from "../../../assets/icons/CloseIcon";
import Button from "../Button";
import "./index.css";

type Props = {
    dialogRef: RefObject<HTMLDialogElement>;
    title: string;
    children: ReactNode;
    closeModal: () => void;
};

const StandardModal = ({ dialogRef, title, children, closeModal }: Props) => {
    return (
        <dialog ref={dialogRef} className="standard__modal">
            <header>
                <h5>{title}</h5>
                <Button type="button" className="icon" onClick={() => closeModal()}>
                    <CloseIcon width={24} height={24} color="var(--neutral-50)" />
                </Button>
            </header>
            <main>{children}</main>
        </dialog>
    );
};

export default StandardModal;

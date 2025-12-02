import { createContext, ReactNode, useCallback, useRef, useState } from "react";
import ConfirmationModal from "../components/ConfirmationModal";

type ConfirmationModalContextType = {
    message: string;
    primaryButtonText: string;
    showModal: (message: string, primaryButtonText: string, onConfirm: () => void) => void;
    closeModal: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ConfirmationModalContext = createContext<ConfirmationModalContextType | undefined>(undefined);

export const ConfirmationModalProvider = ({ children }: { children: ReactNode }) => {
    const confirmationModalRef = useRef<HTMLDialogElement>(null);
    const [message, setMessage] = useState("");
    const [primaryButtonText, setPrimaryButtonText] = useState("");
    const [onConfirm, setOnConfirm] = useState<() => void>(() => {});

    const showModal = useCallback((message: string, primaryButtonText: string, onConfirm: () => void) => {
        setMessage(message);
        setPrimaryButtonText(primaryButtonText);
        setOnConfirm(() => onConfirm);
        confirmationModalRef.current?.showModal();
    }, []);

    const closeModal = useCallback(() => confirmationModalRef.current?.close(), []);

    // const contextValues = useMemo(() => {
    //     return {
    //         message,
    //         primaryButtonText,
    //         showModal,
    //         closeModal,
    //     };
    // }, [message, primaryButtonText, showModal, closeModal]);

    return (
        <ConfirmationModalContext.Provider value={{ message, primaryButtonText, showModal, closeModal }}>
            {children}
            <ConfirmationModal
                dialogRef={confirmationModalRef}
                message={message}
                primaryButtonText={primaryButtonText}
                onConfirm={onConfirm}
                closeModal={closeModal}
            />
        </ConfirmationModalContext.Provider>
    );
};

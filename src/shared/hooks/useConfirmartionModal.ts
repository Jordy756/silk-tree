import { useContext } from "react";
import { ConfirmationModalContext } from "../context/confirmationModalContext";

export const useConfirmationModal = () => {
    const context = useContext(ConfirmationModalContext);
    if (!context) throw new Error("useConfirmationModal debe estar dentro de un ConfirmationModalContext");

    return context;
};

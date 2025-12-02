import { useContext } from "react";
import { StandardModalContext } from "../context/standardModalContext";

export const useStandardModal = () => {
    const context = useContext(StandardModalContext);
    if (!context) throw new Error("useStandardModal debe estar dentro de un StandardModalContext");

    return context;
};

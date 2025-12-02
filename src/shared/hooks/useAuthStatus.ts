import { useContext } from "react";
import { AuthStatusContext } from "../context/authStatusContext";

export const useAuthStatus = () => {
    const context = useContext(AuthStatusContext);
    if (!context) throw new Error("useAuthStatus debe estar dentro de un AuthStatusContext");

    return context;
};

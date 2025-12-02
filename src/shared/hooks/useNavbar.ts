import { useLocation, useNavigate } from "react-router-dom";
import { logoutUserService } from "../services/logoutUserService";
import { ApiError } from "../utils/apiError";
import { useToast } from "./useToast";
import { useState, useRef, useCallback, useEffect } from "react";
import { useAuthStatus } from "./useAuthStatus";

export const useNavbar = () => {
    const { addToast } = useToast();
    const { handleIsAuthenticated } = useAuthStatus();
    const navigate = useNavigate();

    const location = useLocation();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const userMenuRef = useRef<HTMLUListElement | null>(null);
    const userButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleUserMenuToggle = () => setIsUserMenuOpen((prev) => !prev);
    const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

    const handleUserClickOutside = useCallback(
        (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                isUserMenuOpen &&
                userMenuRef.current &&
                !userMenuRef.current.contains(target) &&
                userButtonRef.current &&
                !userButtonRef.current.contains(target)
            ) {
                setIsUserMenuOpen(false);
            }
        },
        [isUserMenuOpen]
    );

    useEffect(() => {
        if (!isUserMenuOpen) return;

        document.addEventListener("mousedown", handleUserClickOutside);

        return () => document.removeEventListener("mousedown", handleUserClickOutside);
    }, [isUserMenuOpen, handleUserClickOutside]);

    const logoutUser = async () => {
        try {
            await logoutUserService();
            handleIsAuthenticated(false);
            setIsUserMenuOpen(false);
            addToast({ title: "Sesión cerrada", message: "Has cerrado sesión exitosamente", type: "success" });

            if (location.pathname !== "/") navigate("/#home", { replace: true });
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    return {
        isUserMenuOpen,
        isMenuOpen,
        userMenuRef,
        userButtonRef,
        handleUserMenuToggle,
        handleMenuToggle,
        logoutUser,
    };
};

import { createContext, ReactNode, useState } from "react";
import { ToastProps } from "../types/toastTypes";
import Toast from "../components/Toast";

type ToastContextType = {
    toasts: ToastProps[];
    addToast: (toast: ToastProps) => void;
    removeToast: (id: string) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const addToast = (toast: ToastProps) => {
        const newToast: ToastProps = {
            ...toast,
            id: `toast-${Date.now()}`,
            type: toast.type,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
        setTimeout(() => removeToast(newToast.id || ""), 7800);
    };

    const removeToast = (id: string) => {
        setToasts((prevToasts) => prevToasts.map((toast) => (toast.id === id ? { ...toast, removing: true } : toast)));
        setTimeout(() => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id)), 300);
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <div className={`toasts__container ${toasts.length > 0 ? "active" : ""}`}>
                {toasts.map(({ id, title, message, type, removing }) => (
                    <Toast key={id} id={id} title={title} message={message} type={type} removing={removing} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

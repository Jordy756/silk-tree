export type ToastError = "success" | "error" | "warning" | "info";

export type ToastProps = {
    id?: string;
    title: string;
    message: string;
    type: ToastError;
    removing?: boolean;
};

import { useForm } from "react-hook-form";
import { useToast } from "../../../shared/hooks/useToast";
import { User } from "../entities/User";
import { registerUserService } from "../services/registerUserService";
import { ApiError } from "../../../shared/utils/apiError";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { registerUserWithGoogleService } from "../services/registerUserWithGoogleService";

export const useRegisterUser = (handleIsToggled: () => void) => {
    const { addToast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const registerUser = async (userData: User) => {
        try {
            const user = await registerUserService(userData);

            addToast({
                title: "Usuario creado",
                message: `El usuario ${user.email} fue creado correctamente`,
                type: "success",
            });
            reset();
            handleIsToggled();
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    const registerUserWithGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse: TokenResponse) => {
            try {
                const user = await registerUserWithGoogleService(tokenResponse.access_token);
                addToast({
                    title: "Usuario creado",
                    message: `El usuario ${user.email} fue creado correctamente`,
                    type: "success",
                });
                handleIsToggled();
            } catch (error: any) {
                console.error(error);
                if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
            }
        },
        onError: () =>
            addToast({
                title: "Error de autenticación",
                message: "Hubo un problema al conectar con Google. Por favor, intenta más tarde",
                type: "error",
            }),
    });

    return { register, handleSubmit, errors, registerUser, registerUserWithGoogle };
};

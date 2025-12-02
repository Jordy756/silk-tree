import { useForm } from "react-hook-form";
import { useToast } from "@hooks/useToast";
import { loginUserService } from "@features/auth/services/loginUserService";
import { User } from "@features/auth/entities/User";
import { useNavigate } from "react-router-dom";
import { ApiError } from "@utils/apiError";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { loginUserWithGoogleService } from "@features/auth/services/loginUserWithGoogleService";
import { useAuthStatus } from "@hooks/useAuthStatus";

export const useLoginUser = () => {
    const navigate = useNavigate();
    const { addToast } = useToast();
    const { handleIsAuthenticated } = useAuthStatus();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const loginUser = async (userData: User) => {
        try {
            await loginUserService(userData);
            reset();
            handleIsAuthenticated(true);
            navigate("/#home", { replace: true });
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    const loginUserWithGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse: TokenResponse) => {
            try {
                await loginUserWithGoogleService(tokenResponse.access_token);
                handleIsAuthenticated(true);
                navigate("/#home", { replace: true });
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

    return { register, handleSubmit, errors, loginUser, loginUserWithGoogle };
};

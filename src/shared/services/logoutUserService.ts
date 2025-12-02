import { USER_BASE_URL } from "../constants/apiEndpoints";
import { ApiError } from "../utils/apiError";

export const logoutUserService = async () => {
    const response = await fetch(`${USER_BASE_URL}/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) throw new ApiError(data.name, data.message);

    return data;
};

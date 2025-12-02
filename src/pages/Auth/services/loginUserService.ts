import { USER_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { ApiError } from "../../../shared/utils/apiError";
import { User } from "../entities/User";

export const loginUserService = async (user: User) => {
    const response = await fetch(`${USER_BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    const data = await response.json();

    if (!response.ok) throw new ApiError(data.name, data.message);

    return data;
};

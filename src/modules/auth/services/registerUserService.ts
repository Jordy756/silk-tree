import { USER_BASE_URL } from "@constants/apiEndpoints";
import { ApiError } from "@utils/apiError";
import { User } from "src/modules/auth/entities/User";

export const registerUserService = async (user: User) => {
  const response = await fetch(`${USER_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  if (!response.ok) throw new ApiError(data.name, data.message);

  return data;
};

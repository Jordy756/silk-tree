import { USER_BASE_URL } from "../constants/apiEndpoints";
import { ApiError } from "../utils/apiError";

export const getAuthStatusService = async () => {
  const response = await fetch(`${USER_BASE_URL}/auth-status`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) throw new ApiError("Sesión inválida", "Tu sesión ha expirado. Por favor, inicia sesión nuevamente");

  return data;
};

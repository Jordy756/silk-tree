import { SPECIALTY_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { ApiError } from "../../../shared/utils/apiError";

export const getAllSpecialitiesService = async () => {
    const response = await fetch(`${SPECIALTY_BASE_URL}/get-all-specialties`, {
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) throw new ApiError(data.name, data.message);

    return data;
};

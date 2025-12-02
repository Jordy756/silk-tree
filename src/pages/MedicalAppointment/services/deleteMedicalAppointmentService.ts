import { MEDICAL_APPOINTMENT_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { ApiError } from "../../../shared/utils/apiError";

export const deleteMedicalAppointmentService = async (medicalAppointmentId: string) => {
    const response = await fetch(`${MEDICAL_APPOINTMENT_BASE_URL}/delete-medical-appointment/${medicalAppointmentId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    if (!response.ok) throw new ApiError(data.name, data.message);

    return data;
};

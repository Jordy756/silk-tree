import { MEDICAL_APPOINTMENT_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { ApiError } from "../../../shared/utils/apiError";
import { MedicalAppointment } from "../entities/MedicalAppointment";

export const updateMedicalAppointmentService = async (medicalAppointment: MedicalAppointment) => {
    const response = await fetch(`${MEDICAL_APPOINTMENT_BASE_URL}/update-medical-appointment`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(medicalAppointment),
    });

    const data = await response.json();

    if (!response.ok) throw new ApiError(data.name, data.message);

    return data;
};

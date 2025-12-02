import { MEDICAL_APPOINTMENT_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { MedicalAppointment } from "../entities/MedicalAppointment";
import { convertToDate } from "../../../shared/utils/handleDates";
import { ApiError } from "../../../shared/utils/apiError";

export const getAllMedicalAppointmentsService = async () => {
    const response = await fetch(`${MEDICAL_APPOINTMENT_BASE_URL}/get-all-medical-appointments`, {
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) throw new ApiError(data.name, data.message);

    return data.map((medicalAppointment: MedicalAppointment) => ({
        ...medicalAppointment,
        start: convertToDate(medicalAppointment.start),
        end: convertToDate(medicalAppointment.end),
    }));
};

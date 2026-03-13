import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { ApiError } from "../../../shared/utils/apiError";
import { Specialty } from "../entities/Specialty";
import { updateMedicalAppointmentService } from "../services/updateMedicalAppointmentService";
import { MedicalAppointmentFormValues } from "../types/appointmentFormTypes";
import { getDates, getOverlapToastData } from "../utils/handleMedicalAppointment";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useUpdateMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { currentMedicalAppointment, modifyMedicalAppointment, checkMedicalAppointmentOverlap } =
        useMedicalAppointments();

    const updateMedicalAppointment = async ({
        appointmentDate,
        initialHour,
        finalHour,
        specialty: selectedSpecialty,
    }: MedicalAppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);
        const specialty: Specialty = JSON.parse(selectedSpecialty);

        currentMedicalAppointment.title = `Cita de ${specialty.name}`;
        currentMedicalAppointment.start = startDate;
        currentMedicalAppointment.end = endDate;
        currentMedicalAppointment.specialty = specialty;

        if (checkMedicalAppointmentOverlap(currentMedicalAppointment)) return addToast(getOverlapToastData());

        try {
            await updateMedicalAppointmentService(currentMedicalAppointment);
            modifyMedicalAppointment(currentMedicalAppointment);

            addToast({
                title: "Cita actualizada exitosamente",
                message: `Su cita ha sido actualizada correctamente`,
                type: "success",
            });
            closeModal();
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    return { updateMedicalAppointment };
};

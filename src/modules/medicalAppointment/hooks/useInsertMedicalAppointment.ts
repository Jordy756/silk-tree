import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { ApiError } from "../../../shared/utils/apiError";
import { MedicalAppointment } from "../entities/MedicalAppointment";
import { Specialty } from "../entities/Specialty";
import { insertMedicalAppointmentService } from "../services/insertMedicalAppointmentService";
import { MedicalAppointmentFormValues } from "../types/appointmentFormTypes";
import { getDates, getOverlapToastData } from "../utils/handleMedicalAppointment";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useInsertMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { addMedicalAppointment, checkMedicalAppointmentOverlap } = useMedicalAppointments();

    const insertMedicalAppointment = async ({
        appointmentDate,
        initialHour,
        finalHour,
        specialty: selectedSpecialty,
    }: MedicalAppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);
        const specialty: Specialty = JSON.parse(selectedSpecialty);

        const newMedicalAppointment: MedicalAppointment = {
            id: "",
            title: `Cita de ${specialty.name}`,
            start: startDate,
            end: endDate,
            specialty,
        };

        if (checkMedicalAppointmentOverlap(newMedicalAppointment)) return addToast(getOverlapToastData());

        try {
            const { id } = await insertMedicalAppointmentService(newMedicalAppointment);
            newMedicalAppointment.id = id;
            addMedicalAppointment(newMedicalAppointment);
            addToast({
                title: "Cita agendada exitosamente",
                message: `Su cita de ${specialty.name} ha sido programada correctamente`,
                type: "success",
            });
            closeModal();
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    return { insertMedicalAppointment };
};

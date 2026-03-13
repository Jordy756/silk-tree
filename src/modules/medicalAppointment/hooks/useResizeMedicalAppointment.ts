import { useToast } from "../../../shared/hooks/useToast";
import { ApiError } from "../../../shared/utils/apiError";
import { DragAndDropCalendar } from "../entities/DragAndDropCalendar";
import { updateMedicalAppointmentService } from "../services/updateMedicalAppointmentService";
import { getOverlapToastData } from "../utils/handleMedicalAppointment";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useResizeMedicalAppointment = () => {
    const { addToast } = useToast();
    const { checkMedicalAppointmentOverlap } = useMedicalAppointments();

    const resizeMedicalAppointment = async ({ start, end, event: medicalAppointment }: DragAndDropCalendar) => {
        const startDate = medicalAppointment.start;
        const endDate = medicalAppointment.end;

        medicalAppointment.start = start;
        medicalAppointment.end = end;

        if (checkMedicalAppointmentOverlap(medicalAppointment)) {
            medicalAppointment.start = startDate;
            medicalAppointment.end = endDate;
            return addToast(getOverlapToastData());
        }

        try {
            await updateMedicalAppointmentService(medicalAppointment);

            addToast({
                title: "Horario actualizado",
                message: `La duración de su cita de ${medicalAppointment.specialty.name} ha sido modificada correctamente`,
                type: "success",
            });
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    return { resizeMedicalAppointment };
};

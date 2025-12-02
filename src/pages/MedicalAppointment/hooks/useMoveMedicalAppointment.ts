import { useToast } from "../../../shared/hooks/useToast";
import { ApiError } from "../../../shared/utils/apiError";
import { DragAndDropCalendar } from "../entities/DragAndDropCalendar";
import { updateMedicalAppointmentService } from "../services/updateMedicalAppointmentService";
import { validateAppointmentDate } from "../utils/handleAppointmentForm";
import { getOverlapToastData } from "../utils/handleMedicalAppointment";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useMoveMedicalAppointment = () => {
    const { addToast } = useToast();
    const { checkMedicalAppointmentOverlap } = useMedicalAppointments();

    const moveMedicalAppointment = async ({ start, end, event: medicalAppointment }: DragAndDropCalendar) => {
        const message = validateAppointmentDate(start.toDateString());

        if (typeof message === "string") return addToast({ title: "Fecha no válida", message, type: "error" });

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
                title: "Cita movida exitosamente",
                message: `Su cita de ${medicalAppointment.specialty.name} ha sido movida correctamente`,
                type: "success",
            });
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    return { moveMedicalAppointment };
};

import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { ApiError } from "../../../shared/utils/apiError";
import { deleteMedicalAppointmentService } from "../services/deleteMedicalAppointmentService";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useDeleteMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { currentMedicalAppointment, removeMedicalAppointment } = useMedicalAppointments();

    const deleteMedicalAppointment = async () => {
        try {
            await deleteMedicalAppointmentService(currentMedicalAppointment.id);
            removeMedicalAppointment();

            addToast({
                title: "Cita eliminada exitosamente",
                message: `Su cita de ${currentMedicalAppointment.specialty.name} ha sido eliminada correctamente`,
                type: "success",
            });
            closeModal();
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    return { deleteMedicalAppointment };
};

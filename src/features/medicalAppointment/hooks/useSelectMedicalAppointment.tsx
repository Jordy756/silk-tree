import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useMedicalAppointments } from "./useMedicalAppointments";
import MedicalAppointmentDetails from "../components/MedicalAppointmentDetails";
import { MedicalAppointment } from "../entities/MedicalAppointment";

export const useSelectMedicalAppointment = () => {
    const { showModal } = useStandardModal();
    const { handleCurrentMedicalAppointment } = useMedicalAppointments();

    const selectMedicalAppointment = (medicalAppointment: MedicalAppointment) => {
        handleCurrentMedicalAppointment(medicalAppointment);
        showModal("Detalles de la cita", <MedicalAppointmentDetails />);
    };

    return { selectMedicalAppointment };
};

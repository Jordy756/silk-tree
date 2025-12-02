import { Views } from "react-big-calendar";
import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useMedicalAppointments } from "./useMedicalAppointments";
import NewMedicalAppointment from "../components/NewMedicalAppointment";
import { MedicalAppointment } from "../entities/MedicalAppointment";

export const useSelectMedicalAppointmentSlot = (currentView: (typeof Views)[keyof typeof Views]) => {
    const { showModal } = useStandardModal();
    const { handleCurrentMedicalAppointment } = useMedicalAppointments();
    const { MONTH } = Views;

    const selectMedicalAppointmentSlot = ({ id, start, end }: MedicalAppointment) => {
        handleCurrentMedicalAppointment({
            id,
            title: "",
            start,
            end: currentView === MONTH ? start : end,
            specialty: { id: 0, name: "" },
        });
        showModal("Agendar cita", <NewMedicalAppointment />);
    };

    return { selectMedicalAppointmentSlot };
};

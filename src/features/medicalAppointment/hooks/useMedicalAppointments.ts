import { useContext } from "react";
import { MedicalAppointmentsContext } from "../context/medicalAppointmentsContext";

export const useMedicalAppointments = () => {
    const context = useContext(MedicalAppointmentsContext);
    if (!context) throw new Error("useCalendarEvent debe estar dentro de un CalendarEventProvider");

    return context;
};

import { ToastProps } from "../../../shared/types/toastTypes";
import { convertToDate, getFormattedDateString, DATE_FORMAT } from "../../../shared/utils/handleDates";

export const getDates = (appointmentDate: string, initialHour: string, finalHour: string) => {
    const newAppointmentDate = convertToDate(appointmentDate);
    return {
        startDate: new Date(getFormattedDateString(newAppointmentDate, DATE_FORMAT) + "T" + initialHour),
        endDate: new Date(getFormattedDateString(newAppointmentDate, DATE_FORMAT) + "T" + finalHour),
    };
};

export const getOverlapToastData = (): ToastProps => ({
    title: "Horario no disponible",
    message: "Ya existe una cita programada en este horario. Por favor, seleccione otro horario.",
    type: "error",
});

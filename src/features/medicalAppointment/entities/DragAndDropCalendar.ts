import { MedicalAppointment } from "@features/medicalAppointment/entities/MedicalAppointment";

export interface DragAndDropCalendar {
    resourceId: unknown;
    start: Date;
    end: Date;
    event: MedicalAppointment;
}

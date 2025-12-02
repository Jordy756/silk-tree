import { MedicalAppointment } from "./MedicalAppointment";

export interface DragAndDropCalendar {
    resourceId: unknown;
    start: Date;
    end: Date;
    event: MedicalAppointment;
}

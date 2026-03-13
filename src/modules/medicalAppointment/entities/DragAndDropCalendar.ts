import { MedicalAppointment } from "src/modules/medicalAppointment/entities/MedicalAppointment";

export interface DragAndDropCalendar {
  resourceId: unknown;
  start: Date;
  end: Date;
  event: MedicalAppointment;
}

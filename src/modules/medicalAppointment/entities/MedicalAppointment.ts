import { Specialty } from "src/modules/medicalAppointment/entities/Specialty";

export interface MedicalAppointment {
  id: string;
  title: string;
  start: Date;
  end: Date;
  specialty: Specialty;
}

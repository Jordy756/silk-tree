import { Specialty } from "@features/medicalAppointment/entities/Specialty";

export interface MedicalAppointment {
    id: string;
    title: string;
    start: Date;
    end: Date;
    specialty: Specialty;
}

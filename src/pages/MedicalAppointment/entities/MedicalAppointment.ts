import { Specialty } from "./Specialty";

export interface MedicalAppointment {
    id: string;
    title: string;
    start: Date;
    end: Date;
    specialty: Specialty;
}

import {
    convertToDate,
    DATE_FORMAT,
    FULL_DATE_FORMAT,
    getFormattedDateString,
    TIME_24_FORMAT,
} from "../../../shared/utils/handleDates";
import { MedicalAppointment } from "../entities/MedicalAppointment";
import { Specialty } from "../entities/Specialty";
import { MedicalAppointmentFormValues } from "../types/appointmentFormTypes";

type ValidationName = "appointmentDate" | "initialHour" | "finalHour" | "specialty";

export const validateAppointmentDate = (date: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (
        convertToDate(date) >= convertToDate(today) ||
        `La fecha debe ser mayor o igual a ${getFormattedDateString(today, FULL_DATE_FORMAT)}`
    );
};

const validateFinalHour = (value: string, formValues: MedicalAppointmentFormValues) => {
    const initialHour = formValues.initialHour;
    return value > initialHour || "La hora de finalización debe ser posterior a la hora de inicio";
};

const validateSpecialty = (value: string) => {
    const specialty: Specialty = JSON.parse(value);
    return (specialty.id !== 0 && specialty.name !== "") || "Debes seleccionar una especialidad";
};

const medicalAppointmentFormValidations = {
    appointmentDate: {
        required: {
            value: true,
            message: "La fecha es requerida",
        },
        validate: {
            isAfterToday: (date: string) => validateAppointmentDate(date),
        },
    },
    initialHour: {
        required: {
            value: true,
            message: "La hora de inicio es requerida",
        },
        min: {
            value: "08:00",
            message: "La hora de inicio no puede ser antes de las 8:00",
        },
        max: {
            value: "19:00",
            message: "La hora de inicio no puede ser después de las 19:00",
        },
        pattern: {
            value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
            message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
        },
    },
    finalHour: {
        required: {
            value: true,
            message: "La hora de finalización es requerida",
        },
        min: {
            value: "08:00",
            message: "La hora de finalización no puede ser antes de las 8:00",
        },
        max: {
            value: "19:00",
            message: "La hora de finalización no puede ser después de las 19:00",
        },
        pattern: {
            value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
            message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
        },
        validate: {
            isAfterInitialHour: validateFinalHour,
        },
    },
    specialty: {
        required: {
            value: true,
            message: "La especialidad es requerida",
        },
        validate: {
            isValidSpecialty: validateSpecialty,
        },
    },
};

export const getMedicalAppointmentFormValidation = (validationName: ValidationName) =>
    medicalAppointmentFormValidations[validationName];

export const getDefaultFormValues = ({
    start: startDate,
    end: endDate,
    specialty,
}: MedicalAppointment): MedicalAppointmentFormValues => ({
    appointmentDate: getFormattedDateString(startDate, DATE_FORMAT),
    initialHour: getFormattedDateString(startDate, TIME_24_FORMAT),
    finalHour: getFormattedDateString(endDate, TIME_24_FORMAT),
    specialty: JSON.stringify(specialty),
});

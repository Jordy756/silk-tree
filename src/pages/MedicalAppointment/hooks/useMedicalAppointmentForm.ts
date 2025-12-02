import { useForm } from "react-hook-form";
import { MedicalAppointmentFormValues } from "../types/appointmentFormTypes";
import { useEffect } from "react";
import { useMedicalAppointments } from "./useMedicalAppointments";
import { getDefaultFormValues } from "../utils/handleAppointmentForm";

export const useMedicalAppointmentForm = () => {
    const { currentMedicalAppointment } = useMedicalAppointments();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<MedicalAppointmentFormValues>({
        mode: "onBlur",
        defaultValues: getDefaultFormValues(currentMedicalAppointment),
    });

    useEffect(() => {
        reset(getDefaultFormValues(currentMedicalAppointment));
    }, [currentMedicalAppointment.start, currentMedicalAppointment.end, currentMedicalAppointment.specialty, reset]);

    return { register, handleSubmit, errors };
};

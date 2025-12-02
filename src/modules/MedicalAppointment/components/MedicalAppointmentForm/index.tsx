import { MedicalAppointmentFormValues } from "../../types/appointmentFormTypes";
import { ReactNode } from "react";
import { useMedicalAppointmentForm } from "../../hooks/useMedicalAppointmentForm";
import { getMedicalAppointmentFormValidation } from "../../utils/handleAppointmentForm";
import Form from "../../../../shared/components/Form";
import InputBox from "../../../../shared/components/InputBox";
import "./index.css";
import { useMedicalAppointments } from "../../hooks/useMedicalAppointments";

type Props = {
    children: ReactNode;
    isNonEditable?: boolean;
    onSubmit: (calendarEvent: MedicalAppointmentFormValues) => void;
};

const MedicalAppointmentForm = ({ children, isNonEditable, onSubmit }: Props) => {
    const { specialties } = useMedicalAppointments();
    const { register, handleSubmit, errors } = useMedicalAppointmentForm();

    return (
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <InputBox labelText="Fecha" error={errors.appointmentDate}>
                <input
                    type="date"
                    readOnly={isNonEditable}
                    {...register("appointmentDate", getMedicalAppointmentFormValidation("appointmentDate"))}
                />
            </InputBox>
            <div className="input__box-container">
                <InputBox labelText="Hora de inicio" error={errors.initialHour}>
                    <input
                        type="time"
                        readOnly={isNonEditable}
                        {...register("initialHour", getMedicalAppointmentFormValidation("initialHour"))}
                    />
                </InputBox>
                <InputBox labelText="Hora de salida" error={errors.finalHour}>
                    <input
                        type="time"
                        readOnly={isNonEditable}
                        {...register("finalHour", getMedicalAppointmentFormValidation("finalHour"))}
                    />
                </InputBox>
            </div>
            <InputBox labelText="Especialidad" error={errors.specialty}>
                <select
                    {...register("specialty", getMedicalAppointmentFormValidation("specialty"))}
                    disabled={isNonEditable}
                >
                    <option value='{"id":0,"name":""}' disabled>
                        Selecciona una opción
                    </option>
                    {specialties.map(({ id, name }) => (
                        <option key={id} value={JSON.stringify({ id, name })}>
                            {name}
                        </option>
                    ))}
                </select>
            </InputBox>
            <div className="form__actions">{children}</div>
        </Form>
    );
};

export default MedicalAppointmentForm;

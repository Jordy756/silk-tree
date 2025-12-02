import { useStandardModal } from "../../../../shared/hooks/useStandardModal";
import { useInsertMedicalAppointment } from "../../hooks/useInsertMedicalAppointment";
import MedicalAppointmentForm from "../MedicalAppointmentForm";
import Button from "../../../../shared/components/Button";
import "./index.css";

const NewMedicalAppointment = () => {
    const { closeModal } = useStandardModal();
    const { insertMedicalAppointment } = useInsertMedicalAppointment();

    return (
        <MedicalAppointmentForm onSubmit={insertMedicalAppointment}>
            <Button type="submit" className="primary">
                Agendar
            </Button>
            <Button type="reset" className="secondary" onClick={() => closeModal()}>
                Cancelar
            </Button>
        </MedicalAppointmentForm>
    );
};

export default NewMedicalAppointment;

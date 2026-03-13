import { useStandardModal } from "@hooks/useStandardModal";
import { useInsertMedicalAppointment } from "src/modules/medicalAppointment/hooks/useInsertMedicalAppointment";
import MedicalAppointmentForm from "src/modules/medicalAppointment/components/MedicalAppointmentForm";
import Button from "@components/Button";
import "./index.css";

const NewMedicalAppointment = () => {
  const { closeModal } = useStandardModal();
  const { insertMedicalAppointment } = useInsertMedicalAppointment();

  return (
    <MedicalAppointmentForm onSubmit={insertMedicalAppointment}>
      <Button type="submit" variant="primary">
        Agendar
      </Button>
      <Button type="reset" variant="secondary" onClick={closeModal}>
        Cancelar
      </Button>
    </MedicalAppointmentForm>
  );
};

export default NewMedicalAppointment;

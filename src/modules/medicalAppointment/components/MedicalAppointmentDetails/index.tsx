import { useState } from "react";
import { useConfirmationModal } from "@hooks/useConfirmartionModal";
import { useUpdateMedicalAppointment } from "src/modules/medicalAppointment/hooks/useUpdateMedicalAppointment";
import { useDeleteMedicalAppointment } from "src/modules/medicalAppointment/hooks/useDeleteMedicalAppointment";
import MedicalAppointmentForm from "src/modules/medicalAppointment/components/MedicalAppointmentForm";
import Button from "@components/Button";
import "./index.css";

const MedicalAppointmentDetails = () => {
  const [isEditMode, setIsEditMode] = useState(true);
  const handleIsEditMode = () => setIsEditMode((prev) => !prev);

  const { showModal } = useConfirmationModal();
  const { updateMedicalAppointment } = useUpdateMedicalAppointment();
  const { deleteMedicalAppointment } = useDeleteMedicalAppointment();

  return (
    <MedicalAppointmentForm isNonEditable={isEditMode} onSubmit={updateMedicalAppointment}>
      <Button type={!isEditMode ? "button" : "submit"} variant="primary" onClick={handleIsEditMode}>
        {isEditMode ? "Editar" : "Actualizar"}
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          isEditMode ? showModal("Estas seguro?", "Eliminar", deleteMedicalAppointment) : handleIsEditMode()
        }
      >
        {isEditMode ? "Eliminar" : "Cancelar"}
      </Button>
    </MedicalAppointmentForm>
  );
};

export default MedicalAppointmentDetails;
